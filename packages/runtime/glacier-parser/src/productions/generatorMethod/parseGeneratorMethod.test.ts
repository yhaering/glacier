import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseGeneratorMethod } from './parseGeneratorMethod';

function run() {
  const context = fakeParserContext();
  const returnValue = parseGeneratorMethod(context);
  return { returnValue };
}

describe('parseGeneratorMethod', () => {
  beforeEach(run);

  it('should return a function called parseGeneratorMethod', () => {
    expect(parseGeneratorMethod).toBeInstanceOf(Function);
  });
});
