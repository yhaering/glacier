import { createWorkerPool } from './createWorkerPool';
import { createWorkers } from './createWorkers';
import { createWorkerPoolTerminateFn } from './createWorkerPoolTerminateFn';
import { createWorkerPoolRunFn } from './createWorkerPoolRunFn';

jest.mock('./createWorkerPoolRunFn', () => ({
  createWorkerPoolRunFn: jest.fn().mockReturnValue('{{RUN_FN}}')
}));

jest.mock('./createWorkerPoolTerminateFn', () => ({
  createWorkerPoolTerminateFn: jest.fn().mockReturnValue('{{TERMINATE_FN}}')
}));

jest.mock('./createWorkers', () => ({
  createWorkers: jest.fn().mockReturnValue('{{WORKERS}}')
}));

function run() {
  const factory = jest.fn();
  const returnValue = createWorkerPool(5, factory);
  return { returnValue, factory };
}

describe('createWorkerPool', () => {
  beforeEach(run);

  test('exports a function called createWorkerPool', () => {
    expect(createWorkerPool).toBeInstanceOf(Function);
  });

  test('calls createWorkers', () => {
    const { factory } = run();
    expect(createWorkers).toHaveBeenCalledWith(5, factory);
  });

  test('calls createWorkerPoolTerminateFn', () => {
    expect(createWorkerPoolTerminateFn).toHaveBeenCalledWith('{{WORKERS}}');
  });

  test('createWorkerPoolRunFn', () => {
    expect(createWorkerPoolRunFn).toHaveBeenCalledWith('{{WORKERS}}');
  });

  test('returns WorkerPool', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      terminate: '{{TERMINATE_FN}}',
      run: '{{RUN_FN}}'
    });
  });
});
