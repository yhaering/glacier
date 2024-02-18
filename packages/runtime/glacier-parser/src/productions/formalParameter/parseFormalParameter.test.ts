import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseFormalParameter } from './parseFormalParameter';

function run() {
  const context = fakeParserContext();
  const returnValue = parseFormalParameter(context);
  return { returnValue };
}

describe('parseFormalParameter', () => {
  beforeEach(run);

  it('should return a function called parseFormalParameter', () => {
    expect(parseFormalParameter).toBeInstanceOf(Function);
  });
});
