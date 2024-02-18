import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseTemplateTail } from './parseTemplateTail';

function run() {
  const context = fakeParserContext();
  const returnValue = parseTemplateTail(context);
  return { returnValue };
}

describe('parseTemplateTail', () => {
  beforeEach(run);

  it('should return a function called parseTemplateTail', () => {
    expect(parseTemplateTail).toBeInstanceOf(Function);
  });
});
