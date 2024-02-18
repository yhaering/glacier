import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSignedInteger } from './parseSignedInteger';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSignedInteger(context);
  return { returnValue };
}

describe('parseSignedInteger', () => {
  beforeEach(run);

  it('should return a function called parseSignedInteger', () => {
    expect(parseSignedInteger).toBeInstanceOf(Function);
  });
});
