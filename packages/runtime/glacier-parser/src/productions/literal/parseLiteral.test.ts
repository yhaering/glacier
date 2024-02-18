import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLiteral } from './parseLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLiteral(context);
  return { returnValue };
}

describe('parseLiteral', () => {
  beforeEach(run);

  it('should return a function called parseLiteral', () => {
    expect(parseLiteral).toBeInstanceOf(Function);
  });
});
