import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parsePropertySetParameterList } from './parsePropertySetParameterList';

function run() {
  const context = fakeParserContext();
  const returnValue = parsePropertySetParameterList(context);
  return { returnValue };
}

describe('parsePropertySetParameterList', () => {
  beforeEach(run);

  it('should return a function called parsePropertySetParameterList', () => {
    expect(parsePropertySetParameterList).toBeInstanceOf(Function);
  });
});
