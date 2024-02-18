import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCodePoint } from './parseCodePoint';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCodePoint(context);
  return { returnValue };
}

describe('parseCodePoint', () => {
  beforeEach(run);

  it('should return a function called parseCodePoint', () => {
    expect(parseCodePoint).toBeInstanceOf(Function);
  });
});
