import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseModuleBody } from './parseModuleBody';

function run() {
  const context = fakeParserContext();
  const returnValue = parseModuleBody(context);
  return { returnValue };
}

describe('parseModuleBody', () => {
  beforeEach(run);

  it('should return a function called parseModuleBody', () => {
    expect(parseModuleBody).toBeInstanceOf(Function);
  });
});
