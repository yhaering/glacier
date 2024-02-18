import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCatch } from './parseCatch';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCatch(context);
  return { returnValue };
}

describe('parseCatch', () => {
  beforeEach(run);

  it('should return a function called parseCatch', () => {
    expect(parseCatch).toBeInstanceOf(Function);
  });
});
