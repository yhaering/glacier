import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseCatchParameter } from './parseCatchParameter';

function run() {
  const context = fakeParserContext();
  const returnValue = parseCatchParameter(context);
  return { returnValue };
}

describe('parseCatchParameter', () => {
  beforeEach(run);

  it('should return a function called parseCatchParameter', () => {
    expect(parseCatchParameter).toBeInstanceOf(Function);
  });
});
