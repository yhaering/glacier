import { createBrowserStream } from './createBrowserStream';
import { createWorker } from '../../functions/createWorker';
import { createStream } from '../../functions/createStream';
import { makeBrowserTerminator } from './factories/makeBrowserTerminator';

jest.mock('../../functions/createWorker', () => ({
  createWorker: jest.fn().mockReturnValue('{{WORKER}}')
}));

jest.mock('../../functions/createStream', () => ({
  createStream: jest.fn().mockReturnValue('{{STREAM}}')
}));

jest.mock('./factories/makeBrowserTerminator', () => ({
  makeBrowserTerminator: jest.fn().mockReturnValue('{{TERMINATOR}}')
}));

function run() {
  const resolver = jest.fn();
  const returnValue = createBrowserStream(resolver);
  return { returnValue, resolver };
}

describe('createBrowserStream', () => {
  beforeEach(run);

  test('exports a function called createBrowserStream', () => {
    expect(createBrowserStream).toBeInstanceOf(Function);
  });

  test('calls makeBrowserTerminator', () => {
    expect(makeBrowserTerminator).toHaveBeenCalledWith();
  });

  test('calls createWorker', () => {
    const { resolver } = run();
    expect(createWorker).toHaveBeenCalledWith(resolver, '{{TERMINATOR}}');
  });

  test('calls createStream', () => {
    expect(createStream).toHaveBeenCalledWith(['{{WORKER}}']);
  });

  test('returns stream', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{STREAM}}');
  });
});
