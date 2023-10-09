import { createCharacterStream } from './createCharacterStream';
import { createCharacterStreamNextFn } from './factories/createCharacterStreamNextFn';
import { createCharacterStreamPeekFn } from './factories/createCharacterStreamPeekFn';

jest.mock('./factories/createCharacterStreamNextFn', () => ({
  createCharacterStreamNextFn: jest.fn().mockReturnValue('{{NEXT_FN}}')
}));

jest.mock('./factories/createCharacterStreamPeekFn', () => ({
  createCharacterStreamPeekFn: jest.fn().mockReturnValue('{{PEEK_FN}}')
}));

function run() {
  const returnValue = createCharacterStream('{{STREAM}}');
  return { returnValue };
}

describe('createCharacterStream', () => {
  beforeEach(run);

  test('exports a function called createCharacterStream', () => {
    expect(createCharacterStream).toBeInstanceOf(Function);
  });

  test('calls createCharacterStreamNextFn', () => {
    expect(createCharacterStreamNextFn).toHaveBeenCalledWith(
      { value: 0 },
      '{{STREAM}}'
    );
  });

  test('calls createCharacterStreamPeekFn', () => {
    expect(createCharacterStreamPeekFn).toHaveBeenCalledWith(
      { value: 0 },
      '{{STREAM}}'
    );
  });

  test('returns CharacterStream', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      next: '{{NEXT_FN}}',
      peek: '{{PEEK_FN}}'
    });
  });
});
