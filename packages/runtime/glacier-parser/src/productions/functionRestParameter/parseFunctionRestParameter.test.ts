import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseFunctionRestParameter } from './parseFunctionRestParameter';

function run() {
  const context = fakeParserContext();
  const returnValue = parseFunctionRestParameter(context);
  return { returnValue };
}

describe('parseFunctionRestParameter', () => {
  beforeEach(run);

  it('should return a function called parseFunctionRestParameter', () => {
    expect(parseFunctionRestParameter).toBeInstanceOf(Function);
  });
});
