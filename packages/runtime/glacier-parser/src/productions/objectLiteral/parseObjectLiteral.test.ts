import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseObjectLiteral } from './parseObjectLiteral';

function run() {
  const context = fakeParserContext();
  const returnValue = parseObjectLiteral(context);
  return { returnValue };
}

describe('parseObjectLiteral', () => {
  beforeEach(run);

  it('should return a function called parseObjectLiteral', () => {
    expect(parseObjectLiteral).toBeInstanceOf(Function);
  });
});
