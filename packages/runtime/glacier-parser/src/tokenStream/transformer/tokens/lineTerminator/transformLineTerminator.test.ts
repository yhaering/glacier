import { transformLineTerminator } from './transformLineTerminator';
import { fakeCharacterStream } from '../../../../../test/fakes/fakeCharacterStream';

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = transformLineTerminator(characterStream);
  return { returnValue, characterStream };
}

describe('transformLineTerminator', () => {
  beforeEach(run);

  test('exports a function called transformLineTerminator', () => {
    expect(transformLineTerminator).toBeInstanceOf(Function);
  });

  test('calls characterStream.next', () => {
    const { characterStream } = run();
    expect(characterStream.next).toHaveBeenCalledWith();
  });

  test('returns LineTerminatorToken', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'LINE_TERMINATOR',
      value: '{{CHAR}}'
    });
  });
});
