import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseArrowFunction } from './parseArrowFunction';

function run() {
  const context = fakeParserContext();
  const returnValue = parseArrowFunction(context);
  return { returnValue };
}

describe('parseArrowFunction', () => {
  beforeEach(run);

  it('should return a function called parseArrowFunction', () => {
    expect(parseArrowFunction).toBeInstanceOf(Function);
  });
});
