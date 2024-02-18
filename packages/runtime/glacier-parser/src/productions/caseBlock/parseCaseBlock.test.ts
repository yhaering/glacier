import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCaseBlock } from './parseCaseBlock';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCaseBlock(context);
  return { returnValue };
}

describe('parseCaseBlock', () => {
  beforeEach(run);

  it('should return a function called parseCaseBlock', () => {
    expect(parseCaseBlock).toBeInstanceOf(Function);
  });
});
