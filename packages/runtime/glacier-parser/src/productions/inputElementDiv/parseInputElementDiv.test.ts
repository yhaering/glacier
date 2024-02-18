import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseInputElementDiv } from './parseInputElementDiv';

function run() {
  const context = fakeParserContext();
  const returnValue = parseInputElementDiv(context);
  return { returnValue };
}

describe('parseInputElementDiv', () => {
  beforeEach(run);

  it('should return a function called parseInputElementDiv', () => {
    expect(parseInputElementDiv).toBeInstanceOf(Function);
  });
});
