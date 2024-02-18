import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBinaryIntegerLiteral } from './parseBinaryIntegerLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBinaryIntegerLiteral(context);
  return { returnValue };
}

describe('parseBinaryIntegerLiteral', () => {
  beforeEach(run);

  it('should return a function called parseBinaryIntegerLiteral', () => {
    expect(parseBinaryIntegerLiteral).toBeInstanceOf(Function);
  });
});
