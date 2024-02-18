import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseClassElement } from './parseClassElement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseClassElement(context);
  return { returnValue };
}

describe('parseClassElement', () => {
  beforeEach(run);

  it('should return a function called parseClassElement', () => {
    expect(parseClassElement).toBeInstanceOf(Function);
  });
});
