import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseUnicodeIDStart } from './parseUnicodeIDStart';

function run() {
  const context = fakeParserContext();
  const returnValue = parseUnicodeIDStart(context);
  return { returnValue };
}

describe('parseUnicodeIDStart', () => {
  beforeEach(run);

  it('should return a function called parseUnicodeIDStart', () => {
    expect(parseUnicodeIDStart).toBeInstanceOf(Function);
  });
});
