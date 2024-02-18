import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseFromClause } from './parseFromClause';

function run() {
  const context = fakeParserContext();
  const returnValue = parseFromClause(context);
  return { returnValue };
}

describe('parseFromClause', () => {
  beforeEach(run);

  it('should return a function called parseFromClause', () => {
    expect(parseFromClause).toBeInstanceOf(Function);
  });
});
