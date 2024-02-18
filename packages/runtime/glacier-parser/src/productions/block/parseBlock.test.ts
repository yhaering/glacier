import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseBlock } from './parseBlock';

function run() {
  const context = fakeParserContext();
  const returnValue = parseBlock(context);
  return { returnValue };
}

describe('parseBlock', () => {
  beforeEach(run);

  it('should return a function called parseBlock', () => {
    expect(parseBlock).toBeInstanceOf(Function);
  });
});
