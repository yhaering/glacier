import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseScriptBody } from './parseScriptBody';

function run() {
  const context = fakeParserContext();
  const returnValue = parseScriptBody(context);
  return { returnValue };
}

describe('parseScriptBody', () => {
  beforeEach(run);

  it('should return a function called parseScriptBody', () => {
    expect(parseScriptBody).toBeInstanceOf(Function);
  });
});
