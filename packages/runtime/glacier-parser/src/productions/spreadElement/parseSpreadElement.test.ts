import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSpreadElement } from './parseSpreadElement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSpreadElement(context);
  return { returnValue };
}

describe('parseSpreadElement', () => {
  beforeEach(run);

  it('should return a function called parseSpreadElement', () => {
    expect(parseSpreadElement).toBeInstanceOf(Function);
  });
});
