import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseClassStaticBlockBody } from './parseClassStaticBlockBody';

function run() {
  const context = fakeParserContext();
  const returnValue = parseClassStaticBlockBody(context);
  return { returnValue };
}

describe('parseClassStaticBlockBody', () => {
  beforeEach(run);

  it('should return a function called parseClassStaticBlockBody', () => {
    expect(parseClassStaticBlockBody).toBeInstanceOf(Function);
  });
});
