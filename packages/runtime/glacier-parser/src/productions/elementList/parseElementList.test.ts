import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseElementList } from './parseElementList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseElementList(context);
  return { returnValue };
}

describe('parseElementList', () => {
  beforeEach(run);

  it('should return a function called parseElementList', () => {
    expect(parseElementList).toBeInstanceOf(Function);
  });
});
