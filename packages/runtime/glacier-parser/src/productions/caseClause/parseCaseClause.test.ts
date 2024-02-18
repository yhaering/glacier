import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCaseClause } from './parseCaseClause';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCaseClause(context);
  return { returnValue };
}

describe('parseCaseClause', () => {
  beforeEach(run);

  it('should return a function called parseCaseClause', () => {
    expect(parseCaseClause).toBeInstanceOf(Function);
  });
});
