import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSwitchStatement } from './parseSwitchStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSwitchStatement(context);
  return { returnValue };
}

describe('parseSwitchStatement', () => {
  beforeEach(run);

  it('should return a function called parseSwitchStatement', () => {
    expect(parseSwitchStatement).toBeInstanceOf(Function);
  });
});
