import { createConsumePosition } from './createConsumePosition';
import { fakePosition } from '../../../test/fakes/fakePosition';
import type { Token } from '../../tokenStream/interfaces/Token';

function run(token: Token = { type: 'NULL', value: 'null' }) {
  const position = fakePosition();
  const returnValue = createConsumePosition(position);
  returnValue(token);
  return { returnValue, position };
}

function runWithLineTerminator() {
  return run({ type: 'LINE_TERMINATOR', value: '\n' });
}

function runWithToken() {
  return run({ type: 'NULL', value: 'null' });
}

function runWithString() {
  return run({ type: 'STRING', stringType: 'SINGLE', value: 'null' });
}

describe('createConsumePosition', () => {
  beforeEach(run);

  test('exports a function called createConsumePosition', () => {
    expect(createConsumePosition).toBeInstanceOf(Function);
  });

  test('returns a consume function', () => {
    const { returnValue } = run();
    expect(returnValue).toBeInstanceOf(Function);
  });

  describe('when calling consume function', () => {
    describe('if token is a LINE_TERMINATOR', () => {
      test('increases line', () => {
        const { position } = runWithLineTerminator();
        expect(position).toEqual({
          column: 0,
          line: 2,
          index: 1
        });
      });
    });

    describe('if token is not a LINE_TERMINATOR', () => {
      test('increases line', () => {
        const { position } = runWithToken();
        expect(position).toEqual({
          column: 4,
          line: 1,
          index: 4
        });
      });
    });

    describe('if token is a  STRING', () => {
      test('increases line + 2', () => {
        const { position } = runWithString();
        expect(position).toEqual({
          column: 6,
          line: 1,
          index: 6
        });
      });
    });
  });
});
