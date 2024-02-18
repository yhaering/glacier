import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseWithStatement } from './parseWithStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseWithStatement(context);
  return { returnValue };
}

describe('parseWithStatement', () => {
  beforeEach(run);

  it('should return a function called parseWithStatement', () => {
    expect(parseWithStatement).toBeInstanceOf(Function);
  });
});
