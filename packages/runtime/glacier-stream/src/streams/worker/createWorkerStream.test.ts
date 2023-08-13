import { createWorkerStream } from './createWorkerStream';
import { cpus } from 'node:os';
import { makeResolverFactory } from './factories/makeResolverFactory';
import { createWorkerPool } from '../../functions/createWorkerPool';
import { createStream } from '../../functions/createStream';

jest.mock('../../functions/createWorkerPool', () => ({
  createWorkerPool: jest.fn().mockReturnValue('{{WORKERS}}')
}));

jest.mock('node:os', () => ({
  cpus: jest.fn().mockReturnValue(['{{CPU1}}', '{{CPU2}}'])
}));

jest.mock('./factories/makeResolverFactory', () => ({
  makeResolverFactory: jest.fn().mockReturnValue('{{RESOLVER_FACTORY}}')
}));

jest.mock('../../functions/createStream', () => ({
  createStream: jest.fn().mockReturnValue('{{STREAM}}')
}));

function run() {
  const returnValue = createWorkerStream('{{WORKER_PATH}}');
  return { returnValue };
}

describe('createWorkerStream', () => {
  beforeEach(run);

  test('exports a function called createWorkerStream', () => {
    expect(createWorkerStream).toBeInstanceOf(Function);
  });

  test('calls cpus', () => {
    expect(cpus).toHaveBeenCalledWith();
  });

  test('calls makeResolverFactory', () => {
    expect(makeResolverFactory).toHaveBeenCalledWith('{{WORKER_PATH}}');
  });

  test('calls createWorkerPool', () => {
    expect(createWorkerPool).toHaveBeenCalledWith(2, '{{RESOLVER_FACTORY}}');
  });

  test('calls createStream', () => {
    expect(createStream).toHaveBeenCalledWith('{{WORKERS}}');
  });

  test('returns stream', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{STREAM}}');
  });
});
