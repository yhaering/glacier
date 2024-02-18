import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseInputElementTemplateTail } from './parseInputElementTemplateTail';

function run() {
  const context = fakeParserContext();
  const returnValue = parseInputElementTemplateTail(context);
  return { returnValue };
}

describe('parseInputElementTemplateTail', () => {
  beforeEach(run);

  it('should return a function called parseInputElementTemplateTail', () => {
    expect(parseInputElementTemplateTail).toBeInstanceOf(Function);
  });
});
