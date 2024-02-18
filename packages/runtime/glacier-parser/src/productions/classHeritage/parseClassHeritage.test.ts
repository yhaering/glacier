import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseClassHeritage } from './parseClassHeritage';

function run() {
  const context = fakeParserContext();
  const returnValue = parseClassHeritage(context);
  return { returnValue };
}

describe('parseClassHeritage', () => {
  beforeEach(run);

  it('should return a function called parseClassHeritage', () => {
    expect(parseClassHeritage).toBeInstanceOf(Function);
  });
});
