import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseStringLiteral } from './parseStringLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseStringLiteral(context);
  return { returnValue };
}

describe('parseStringLiteral', () => {
  beforeEach(run);

  it('should return a function called parseStringLiteral', () => {
    expect(parseStringLiteral).toBeInstanceOf(Function);
  });
});
