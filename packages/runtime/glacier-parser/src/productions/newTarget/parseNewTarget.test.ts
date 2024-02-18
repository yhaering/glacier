import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNewTarget } from './parseNewTarget';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNewTarget(context);
  return { returnValue };
}

describe('parseNewTarget', () => {
  beforeEach(run);

  it('should return a function called parseNewTarget', () => {
    expect(parseNewTarget).toBeInstanceOf(Function);
  });
});
