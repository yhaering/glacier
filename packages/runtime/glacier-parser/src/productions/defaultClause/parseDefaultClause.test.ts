import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseDefaultClause } from './parseDefaultClause';

function run() {
  const context = fakeParserContext();
  const returnValue = parseDefaultClause(context);
  return { returnValue };
}

describe('parseDefaultClause', () => {
  beforeEach(run);

  it('should return a function called parseDefaultClause', () => {
    expect(parseDefaultClause).toBeInstanceOf(Function);
  });
});
