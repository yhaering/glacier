import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseClassStaticBlock } from './parseClassStaticBlock';

function run() {
  const context = fakeParserContext();
  const returnValue = parseClassStaticBlock(context);
  return { returnValue };
}

describe('parseClassStaticBlock', () => {
  beforeEach(run);

  it('should return a function called parseClassStaticBlock', () => {
    expect(parseClassStaticBlock).toBeInstanceOf(Function);
  });
});
