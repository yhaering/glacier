import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseGeneratorBody } from './parseGeneratorBody';

function run() {
  const context = fakeParserContext();
  const returnValue = parseGeneratorBody(context);
  return { returnValue };
}

describe('parseGeneratorBody', () => {
  beforeEach(run);

  it('should return a function called parseGeneratorBody', () => {
    expect(parseGeneratorBody).toBeInstanceOf(Function);
  });
});
