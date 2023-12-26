import { transformUnknown } from './transformUnknown';
import { fakeCharacterStream } from '../../../../../test/fakes/fakeCharacterStream';

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = transformUnknown(characterStream);
  return { returnValue, characterStream };
}

describe('transformUnknown', () => {
  beforeEach(run);

  test('exports a function called transformUnknown', () => {
    expect(transformUnknown).toBeInstanceOf(Function);
  });

  test('calls characterStream.next', () => {
    const { characterStream } = run();
    expect(characterStream.next).toHaveBeenCalledWith();
  });

  test('returns unknown token', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'UNKNOWN',
      value: '{{CHAR}}'
    });
  });
});
