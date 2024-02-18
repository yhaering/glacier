import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseConciseBody } from './parseConciseBody';

function run() {
  const context = fakeParserContext();
  const returnValue = parseConciseBody(context);
  return { returnValue };
}

describe('parseConciseBody', () => {
  beforeEach(run);

  it('should return a function called parseConciseBody', () => {
    expect(parseConciseBody).toBeInstanceOf(Function);
  });
});
