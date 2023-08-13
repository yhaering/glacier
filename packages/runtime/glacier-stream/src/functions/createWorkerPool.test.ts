import { createWorkerPool } from './createWorkerPool';
import { createWorker } from './createWorker';

jest.mock('./createWorker', () => ({
  createWorker: jest.fn().mockReturnValue('{{WORKER}}')
}));

function run() {
  const resolverFactory = jest.fn().mockReturnValue({
    resolver: '{{RESOLVER}}',
    terminate: '{{TERMINATOR}}'
  });
  const returnValue = createWorkerPool(2, resolverFactory);
  return { returnValue, resolverFactory };
}

describe('createWorkerPool', () => {
  beforeEach(run);

  test('exports a function called createWorkerPool', () => {
    expect(createWorkerPool).toBeInstanceOf(Function);
  });

  test('calls resolver factory', () => {
    const { resolverFactory } = run();
    expect(resolverFactory).toHaveBeenCalledWith();
  });

  test('calls createWorker', () => {
    expect(createWorker).toHaveBeenCalledWith('{{RESOLVER}}', '{{TERMINATOR}}');
  });

  test('returns all created workers', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual(['{{WORKER}}', '{{WORKER}}']);
  });
});
