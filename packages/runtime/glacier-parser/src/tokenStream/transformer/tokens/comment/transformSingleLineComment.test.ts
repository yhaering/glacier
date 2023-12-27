import { transformSingleLineComment } from './transformSingleLineComment';
import { fakeCharacterStream } from '../../../../../test/fakes/fakeCharacterStream';
import { consumeUntil } from '../../../functions/consumeUntil';
import { whileSingleLineComment } from '../../../checks/whileSingleLineComment';

jest.mock('../../../functions/consumeUntil', () => ({
  consumeUntil: jest.fn().mockReturnValue('{{CONSUMED_VALUE}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = transformSingleLineComment(characterStream);
  return { returnValue, characterStream };
}

describe('transformSingleLineComment', () => {
  beforeEach(run);

  test('exports a function called transformSingleLineComment', () => {
    expect(transformSingleLineComment).toBeInstanceOf(Function);
  });

  test('calls characterStream.next twice', () => {
    const { characterStream } = run();
    expect(characterStream.next).toHaveBeenNthCalledWith(2);
  });

  test('calls consumeUntil', () => {
    const { characterStream } = run();
    expect(consumeUntil).toHaveBeenCalledWith(
      characterStream,
      whileSingleLineComment
    );
  });

  test('returns CommentToken', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'COMMENT',
      commentType: 'SINGLE_LINE',
      value: '{{CONSUMED_VALUE}}'
    });
  });
});
