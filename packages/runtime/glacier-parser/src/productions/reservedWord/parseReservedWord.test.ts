import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseReservedWord } from './parseReservedWord';

function run() {
  const context = fakeParserContext();
  const returnValue = parseReservedWord(context);
  return { returnValue };
}

describe('parseReservedWord', () => {
  beforeEach(run);

  it('should return a function called parseReservedWord', () => {
    expect(parseReservedWord).toBeInstanceOf(Function);
  });
});
