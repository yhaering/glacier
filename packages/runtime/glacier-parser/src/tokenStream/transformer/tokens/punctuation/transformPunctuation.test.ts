import { transformPunctuation } from './transformPunctuation';
import { fakeCharacterStream } from '../../../../../test/fakes/fakeCharacterStream';
import { consumeUntil } from '../../../functions/consumeUntil';
import { whilePunctuation } from '../../../checks/whilePunctuation';

jest.mock('../../../functions/consumeUntil', () => ({
  consumeUntil: jest.fn().mockReturnValue('{{CONSUMED_VALUE}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = transformPunctuation(characterStream);
  return { returnValue, characterStream };
}

describe('transformPunctuation', () => {
  beforeEach(run);

  test('exports a function called transformPunctuation', () => {
    expect(transformPunctuation).toBeInstanceOf(Function);
  });

  test('calls consumeUntil', () => {
    const { characterStream } = run();
    expect(consumeUntil).toHaveBeenCalledWith(
      characterStream,
      whilePunctuation
    );
  });

  test('returns PunctuationToken', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'PUNCTUATION',
      value: '{{CONSUMED_VALUE}}'
    });
  });
});
