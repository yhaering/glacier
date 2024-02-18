import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseTemplate } from './parseTemplate';

function run() {
  const context = fakeParserContext();
  const returnValue = parseTemplate(context);
  return { returnValue };
}

describe('parseTemplate', () => {
  beforeEach(run);

  it('should return a function called parseTemplate', () => {
    expect(parseTemplate).toBeInstanceOf(Function);
  });
});
