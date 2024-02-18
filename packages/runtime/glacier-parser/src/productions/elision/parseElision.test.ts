import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseElision } from './parseElision';

function run() {
  const context = fakeParserContext();
  const returnValue = parseElision(context);
  return { returnValue };
}

describe('parseElision', () => {
  beforeEach(run);

  it('should return a function called parseElision', () => {
    expect(parseElision).toBeInstanceOf(Function);
  });
});
