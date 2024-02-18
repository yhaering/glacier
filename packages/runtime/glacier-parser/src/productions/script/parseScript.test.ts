import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseScript } from './parseScript';

function run() {
  const context = fakeParserContext();
  const returnValue = parseScript(context);
  return { returnValue };
}

describe('parseScript', () => {
  beforeEach(run);

  it('should return a function called parseScript', () => {
    expect(parseScript).toBeInstanceOf(Function);
  });
});
