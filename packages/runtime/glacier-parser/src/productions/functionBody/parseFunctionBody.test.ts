import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseFunctionBody } from './parseFunctionBody';

function run() {
  const context = fakeParserContext();
  const returnValue = parseFunctionBody(context);
  return { returnValue };
}

describe('parseFunctionBody', () => {
  beforeEach(run);

  it('should return a function called parseFunctionBody', () => {
    expect(parseFunctionBody).toBeInstanceOf(Function);
  });
});
