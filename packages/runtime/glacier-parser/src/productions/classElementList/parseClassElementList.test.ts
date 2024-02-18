import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseClassElementList } from './parseClassElementList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseClassElementList(context);
  return { returnValue };
}

describe('parseClassElementList', () => {
  beforeEach(run);

  it('should return a function called parseClassElementList', () => {
    expect(parseClassElementList).toBeInstanceOf(Function);
  });
});
