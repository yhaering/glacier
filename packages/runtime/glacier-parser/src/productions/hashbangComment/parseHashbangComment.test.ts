import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseHashbangComment } from './parseHashbangComment';

function run() {
  const context = fakeParserContext();
  const returnValue = parseHashbangComment(context);
  return { returnValue };
}

describe('parseHashbangComment', () => {
  beforeEach(run);

  it('should return a function called parseHashbangComment', () => {
    expect(parseHashbangComment).toBeInstanceOf(Function);
  });
});
