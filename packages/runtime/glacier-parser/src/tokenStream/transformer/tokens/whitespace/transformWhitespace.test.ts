import { transformWhitespace } from './transformWhitespace';
import { fakeCharacterStream } from '../../../../../test/fakes/fakeCharacterStream';

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = transformWhitespace(characterStream);
  return { returnValue, characterStream };
}

describe('transformWhitespace', () => {
  beforeEach(run);

  test('exports a function called transformWhitespace', () => {
    expect(transformWhitespace).toBeInstanceOf(Function);
  });

  test('calls characterStream.next', () => {
    const { characterStream } = run();
    expect(characterStream.next).toHaveBeenCalledWith();
  });

  test('returns WhitespaceToken', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'WHITESPACE',
      value: '{{CHAR}}'
    });
  });
});
