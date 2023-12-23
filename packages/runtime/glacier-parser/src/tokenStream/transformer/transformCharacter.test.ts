import { transformCharacter } from './transformCharacter';
import { fakeCharacterStream } from '../../../test/fakes/fakeCharacterStream';

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = transformCharacter(characterStream);
  return { returnValue };
}

describe('transformCharacter', () => {
  beforeEach(run);

  test('exports a function called transformCharacter', () => {
    expect(transformCharacter).toBeInstanceOf(Function);
  });
});
