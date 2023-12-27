import { fakeCharacterStream } from '../../../../../test/fakes/fakeCharacterStream';
import { consumeUntil } from '../../../functions/consumeUntil';
import { transformMultiLineComment } from './transformMultiLineComment';
import { whileMultiLineComment } from '../../../checks/whileMultiLineComment';

jest.mock('../../../functions/consumeUntil', () => ({
  consumeUntil: jest.fn().mockReturnValue('{{CONSUMED_VALUE}}')
}));

function run() {
  const characterStream = fakeCharacterStream();
  const returnValue = transformMultiLineComment(characterStream);
  return { returnValue, characterStream };
}

describe('transformMultiLineComment', () => {
  beforeEach(run);

  test('exports a function called transformMultiLineComment', () => {
    expect(transformMultiLineComment).toBeInstanceOf(Function);
  });

  test('calls characterStream.next twice', () => {
    const { characterStream } = run();
    expect(characterStream.next).toHaveBeenNthCalledWith(2);
  });

  test('calls consumeUntil', () => {
    const { characterStream } = run();
    expect(consumeUntil).toHaveBeenCalledWith(
      characterStream,
      whileMultiLineComment
    );
  });

  test('returns CommentToken', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'COMMENT',
      commentType: 'MULTI_LINE',
      value: '{{CONSUMED_VALUE'
    });
  });
});
