import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseInputElementRegExp } from './parseInputElementRegExp';

function run() {
  const context = fakeParserContext();
  const returnValue = parseInputElementRegExp(context);
  return { returnValue };
}

describe('parseInputElementRegExp', () => {
  beforeEach(run);

  it('should return a function called parseInputElementRegExp', () => {
    expect(parseInputElementRegExp).toBeInstanceOf(Function);
  });
});
