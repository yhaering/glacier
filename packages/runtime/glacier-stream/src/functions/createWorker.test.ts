import { createWorker } from './createWorker';

function run() {
  const resolver = jest.fn().mockResolvedValue('{{OUTPUT}}');
  const terminate = jest.fn();
  const returnValue = createWorker(resolver, terminate);
  return { returnValue, resolver, terminate };
}

describe('createWorker', () => {
  beforeEach(run);

  test('exports a function called createWorker', () => {
    expect(createWorker).toBeInstanceOf(Function);
  });

  test('isBusy should be false by default', () => {
    const { returnValue } = run();
    expect(returnValue.isBusy).toBeFalsy();
  });

  test('should execute resolver', async () => {
    const { returnValue, resolver } = run();
    await returnValue.execute('{{INPUT}}');
    expect(resolver).toHaveBeenCalledWith('{{INPUT}}');
  });

  test('should set isBusy to true while promise is not resolved', () => {
    const { returnValue } = run();
    void returnValue.execute('{{INPUT}}');
    expect(returnValue).toBeTruthy();
  });

  test('should return resolved value', async () => {
    const { returnValue } = run();
    const output = await returnValue.execute('{{INPUT}}');
    expect(output).toBe('{{OUTPUT}}');
  });

  test('terminate should just resolve', async () => {
    const { returnValue, terminate } = run();
    await returnValue.terminate();
    expect(terminate).toHaveBeenCalledWith();
  });
});
