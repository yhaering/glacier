import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseClassTail } from './parseClassTail';

function run() {
  const context = fakeParserContext();
  const returnValue = parseClassTail(context);
  return { returnValue };
}

describe('parseClassTail', () => {
  beforeEach(run);

  it('should return a function called parseClassTail', () => {
    expect(parseClassTail).toBeInstanceOf(Function);
  });
});
