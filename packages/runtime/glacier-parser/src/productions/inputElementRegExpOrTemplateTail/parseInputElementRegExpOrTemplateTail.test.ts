import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseInputElementRegExpOrTemplateTail } from './parseInputElementRegExpOrTemplateTail';

function run() {
  const context = fakeParserContext();
  const returnValue = parseInputElementRegExpOrTemplateTail(context);
  return { returnValue };
}

describe('parseInputElementRegExpOrTemplateTail', () => {
  beforeEach(run);

  it('should return a function called parseInputElementRegExpOrTemplateTail', () => {
    expect(parseInputElementRegExpOrTemplateTail).toBeInstanceOf(Function);
  });
});
