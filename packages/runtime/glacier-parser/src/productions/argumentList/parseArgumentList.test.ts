import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseArgumentList } from './parseArgumentList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseArgumentList(context);
  return { returnValue };
}

describe('parseArgumentList', () => {
  beforeEach(run);

  it('should return a function called parseArgumentList', () => {
    expect(parseArgumentList).toBeInstanceOf(Function);
  });
});
