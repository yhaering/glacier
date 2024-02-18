import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseHexIntegerLiteral } from './parseHexIntegerLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseHexIntegerLiteral(context);
  return { returnValue };
}

describe('parseHexIntegerLiteral', () => {
  beforeEach(run);

  it('should return a function called parseHexIntegerLiteral', () => {
    expect(parseHexIntegerLiteral).toBeInstanceOf(Function);
  });
});
