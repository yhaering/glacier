import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseFormalParameterList } from './parseFormalParameterList';

function run() {
  const context = fakeParserContext();
  const returnValue = parseFormalParameterList(context);
  return { returnValue };
}

describe('parseFormalParameterList', () => {
  beforeEach(run);

  it('should return a function called parseFormalParameterList', () => {
    expect(parseFormalParameterList).toBeInstanceOf(Function);
  });
});
