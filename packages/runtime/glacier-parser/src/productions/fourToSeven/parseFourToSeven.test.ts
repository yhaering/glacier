import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseFourToSeven } from './parseFourToSeven';

function run() {
  const context = fakeParserContext();
  const returnValue = parseFourToSeven(context);
  return { returnValue };
}

describe('parseFourToSeven', () => {
  beforeEach(run);

  it('should return a function called parseFourToSeven', () => {
    expect(parseFourToSeven).toBeInstanceOf(Function);
  });
});
