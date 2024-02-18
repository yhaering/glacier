import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseFinally } from './parseFinally';

function run() {
  const context = fakeParserContext();
  const returnValue = parseFinally(context);
  return { returnValue };
}

describe('parseFinally', () => {
  beforeEach(run);

  it('should return a function called parseFinally', () => {
    expect(parseFinally).toBeInstanceOf(Function);
  });
});
