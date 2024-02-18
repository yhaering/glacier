import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCommonToken } from './parseCommonToken';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCommonToken(context);
  return { returnValue };
}

describe('parseCommonToken', () => {
  beforeEach(run);

  it('should return a function called parseCommonToken', () => {
    expect(parseCommonToken).toBeInstanceOf(Function);
  });
});
