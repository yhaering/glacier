import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLetOrConst } from './parseLetOrConst';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLetOrConst(context);
  return { returnValue };
}

describe('parseLetOrConst', () => {
  beforeEach(run);

  it('should return a function called parseLetOrConst', () => {
    expect(parseLetOrConst).toBeInstanceOf(Function);
  });
});
