import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseClassBody } from './parseClassBody';

function run() {
  const context = fakeParserContext();
  const returnValue = parseClassBody(context);
  return { returnValue };
}

describe('parseClassBody', () => {
  beforeEach(run);

  it('should return a function called parseClassBody', () => {
    expect(parseClassBody).toBeInstanceOf(Function);
  });
});
