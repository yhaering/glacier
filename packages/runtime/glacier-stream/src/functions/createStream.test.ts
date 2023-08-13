import { createStream } from './createStream';
import { fakeWorker } from '../../test/fakes/fakeWorker';
import { createEvent } from './createEvent';
import { fakeEvent } from '../../test/fakes/fakeEvent';
import { processItems } from './processItems';

jest.mock('./createEvent');

jest.mock('./processItems', () => ({
  processItems: jest.fn()
}));

function run() {
  const onComplete = fakeEvent();
  (createEvent as jest.Mock).mockReturnValue(onComplete);
  const workers = [fakeWorker()];
  const returnValue = createStream(workers);
  return { returnValue, workers, onComplete };
}

describe('createStream', () => {
  beforeEach(run);

  test('exports a function called createStream', () => {
    expect(createStream).toBeInstanceOf(Function);
  });

  test('calls createEvent', () => {
    expect(createEvent).toHaveBeenCalledWith();
  });

  test('execute creates a new Promise', () => {
    const { returnValue } = run();
    const promise = returnValue.execute('{{INPUT}}');
    expect(promise).toBeInstanceOf(Promise);
  });

  test('calls processItems', () => {
    const { returnValue, workers, onComplete } = run();
    void returnValue.execute('{{INPUT}}');
    expect(processItems).toHaveBeenCalledWith(
      workers,
      [{ input: '{{INPUT}}', resolve: expect.any(Function) as Function }],
      onComplete
    );
  });

  test('calls terminate on all workers', async () => {
    const { returnValue, workers } = run();
    await returnValue.terminate();
    expect(workers[0].terminate).toHaveBeenCalledWith();
  });
});
