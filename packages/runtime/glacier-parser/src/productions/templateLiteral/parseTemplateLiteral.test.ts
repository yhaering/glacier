import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseTemplateLiteral } from './parseTemplateLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseTemplateLiteral(context);
  return { returnValue };
}

describe('parseTemplateLiteral', () => {
  beforeEach(run);

  it('should return a function called parseTemplateLiteral', () => {
    expect(parseTemplateLiteral).toBeInstanceOf(Function);
  });
});
