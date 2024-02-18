import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseComment } from './parseComment';

function run() {
  const context = fakeParserContext();
  const returnValue = parseComment(context);
  return { returnValue };
}

describe('parseComment', () => {
  beforeEach(run);

  it('should return a function called parseComment', () => {
    expect(parseComment).toBeInstanceOf(Function);
  });
});
