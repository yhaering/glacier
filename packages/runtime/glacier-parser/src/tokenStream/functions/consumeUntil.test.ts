import { consumeUntil } from './consumeUntil';
import { fakeCharacterStream } from '../../../test/fakes/fakeCharacterStream';

function run() {
  const consumeFn = jest.fn().mockReturnValue(false);
  const characterStream = fakeCharacterStream();
  const returnValue = consumeUntil(characterStream, consumeFn);
  return { returnValue, characterStream, consumeFn };
}

function runWithOneIteration() {
  const consumeFn = jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false);
  const characterStream = fakeCharacterStream();
  const returnValue = consumeUntil(characterStream, consumeFn);
  return { returnValue, characterStream, consumeFn };
}

describe('consumeUntil', () => {
  beforeEach(run);

  test('exports a function called consumeUntil', () => {
    expect(consumeUntil).toBeInstanceOf(Function);
  });

  test('calls characterStream.peek', () => {
    const { characterStream } = run();
    expect(characterStream.peek).toHaveBeenCalledWith();
  });

  test('calls consumeFn with next character', () => {
    const { consumeFn } = run();
    expect(consumeFn).toHaveBeenCalledWith('{{CHAR}}', '');
  });

  test('returns consumed string', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('');
  });

  describe('if consumeFn returns true once', () => {
    test('calls characterStream.next', () => {
      const { characterStream } = runWithOneIteration();
      expect(characterStream.next).toHaveBeenCalledWith();
    });

    test('returns consumed string', () => {
      const { returnValue } = runWithOneIteration();
      expect(returnValue).toBe('{{CHAR}}');
    });
  });
});
