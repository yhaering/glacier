import { createMessageHandler } from './createMessageHandler';
import { fakeWorkerDefinition } from '../../test/fakes/fakeWorkerDefinition';
import { fakeWorkerMessageExecute } from '../../test/fakes/fakeWorkerMessageExecute';
import { createResolveEvent } from './createResolveEvent';
import { createRejectEvent } from './createRejectEvent';

jest.mock('./createRejectEvent', () => ({
  createRejectEvent: jest.fn().mockReturnValue('{{REJECT_EVENT}}')
}));

jest.mock('./createResolveEvent', () => ({
  createResolveEvent: jest.fn().mockReturnValue('{{RESOLVE_EVENT}}')
}));

function run() {
  const definition = fakeWorkerDefinition();
  const postMessage = jest.fn();
  const message = fakeWorkerMessageExecute();
  const fn = createMessageHandler(postMessage, definition);
  fn(message);
  return { fn, definition, postMessage };
}

function runWithUnknownFn() {
  const definition = fakeWorkerDefinition();
  delete definition['{{NAME}}'];
  const postMessage = jest.fn();
  const message = fakeWorkerMessageExecute();
  const fn = createMessageHandler(postMessage, definition);
  fn(message);
  return { fn, definition, postMessage };
}

function runWithRejection() {
  const definition = fakeWorkerDefinition();
  definition['{{NAME}}'] = jest.fn().mockRejectedValue('{{ERROR}}');
  const postMessage = jest.fn();
  const message = fakeWorkerMessageExecute();
  const fn = createMessageHandler(postMessage, definition);
  fn(message);
  return { fn, definition, postMessage };
}

describe('createMessageHandler', () => {
  beforeEach(run);

  test('exports a function called createMessageHandler', () => {
    expect(createMessageHandler).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls workerFn', () => {
    const { definition } = run();
    expect(definition['{{NAME}}']).toHaveBeenCalledWith('{{INPUT}}');
  });

  test('calls createResolveEvent', () => {
    expect(createResolveEvent).toHaveBeenCalledWith('{{ID}}', '{{OUTPUT}}');
  });

  describe('if workerFn rejects', () => {
    beforeEach(runWithRejection);

    test('call createRejectEvent', () => {
      expect(createRejectEvent).toHaveBeenCalledWith('{{ID}}', '{{ERROR}}');
    });
  });

  describe('if workerFn does not exist', () => {
    beforeEach(runWithUnknownFn);

    test('call createRejectEvent', () => {
      const error = new Error(`Expected function {{NAME}} to exist.`);
      expect(createRejectEvent).toHaveBeenCalledWith('{{ID}}', error);
    });

    test('calls postMessage', () => {
      const { postMessage } = runWithUnknownFn();
      expect(postMessage).toHaveBeenCalledWith('{{REJECT_EVENT}}');
    });
  });
});
