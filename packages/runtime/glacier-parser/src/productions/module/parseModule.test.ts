import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseModule } from './parseModule';

function run() {
  const context = fakeParserContext();
  const returnValue = parseModule(context);
  return { returnValue };
}

describe('parseModule', () => {
  beforeEach(run);

  it('should return a function called parseModule', () => {
    expect(parseModule).toBeInstanceOf(Function);
  });
});
