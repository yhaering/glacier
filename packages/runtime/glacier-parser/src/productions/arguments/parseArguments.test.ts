import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseArguments } from './parseArguments';

function run() {
  const context = fakeParserContext();
  const returnValue = parseArguments(context);
  return { returnValue };
}

describe('parseArguments', () => {
  beforeEach(run);

  it('should return a function called parseArguments', () => {
    expect(parseArguments).toBeInstanceOf(Function);
  });
});
