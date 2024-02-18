import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCaseClauses } from './parseCaseClauses';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCaseClauses(context);
  return { returnValue };
}

describe('parseCaseClauses', () => {
  beforeEach(run);

  it('should return a function called parseCaseClauses', () => {
    expect(parseCaseClauses).toBeInstanceOf(Function);
  });
});
