import { fakeCharacterStream } from '../../../test/fakes/fakeCharacterStream';
import { transformCharacter } from '../functions/transformCharacter';
import { createSegmentStreamNextFn } from './createSegmentStreamNextFn';

jest.mock('../functions/transformCharacter', () => ({
  transformCharacter: jest.fn().mockReturnValue('{{SEGMENT}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const fn = createSegmentStreamNextFn(characterStream);
  const returnValue = fn();
  return { fn, returnValue, characterStream };
}

describe('createSegmentStreamNextFn', () => {
  beforeEach(run);

  test('exports a function called createSegmentStreamNextFn', () => {
    expect(createSegmentStreamNextFn).toBeInstanceOf(Function);
  });

  test('returns a SegmentStreamNextFn', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('calls CharacterStream.next', () => {
    const { characterStream } = run();
    expect(characterStream.next).toHaveBeenCalledWith();
  });

  test('call transformCharacter', () => {
    expect(transformCharacter).toHaveBeenCalledWith('{{CHAR}}');
  });
});
