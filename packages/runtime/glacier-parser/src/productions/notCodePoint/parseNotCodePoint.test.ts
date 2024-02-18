import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseNotCodePoint } from './parseNotCodePoint';

function run() {
  const context = fakeParserContext();
  const returnValue = parseNotCodePoint(context);
  return { returnValue };
}

describe('parseNotCodePoint', () => {
  beforeEach(run);

  it('should return a function called parseNotCodePoint', () => {
    expect(parseNotCodePoint).toBeInstanceOf(Function);
  });
});
