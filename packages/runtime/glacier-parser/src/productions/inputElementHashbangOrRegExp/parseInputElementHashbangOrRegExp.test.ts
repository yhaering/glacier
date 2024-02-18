import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseInputElementHashbangOrRegExp } from './parseInputElementHashbangOrRegExp';

function run() {
  const context = fakeParserContext();
  const returnValue = parseInputElementHashbangOrRegExp(context);
  return { returnValue };
}

describe('parseInputElementHashbangOrRegExp', () => {
  beforeEach(run);

  it('should return a function called parseInputElementHashbangOrRegExp', () => {
    expect(parseInputElementHashbangOrRegExp).toBeInstanceOf(Function);
  });
});
