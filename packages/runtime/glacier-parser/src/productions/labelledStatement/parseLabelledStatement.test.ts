import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseLabelledStatement } from './parseLabelledStatement';

function run() {
  const context = fakeParserContext();
  const returnValue = parseLabelledStatement(context);
  return { returnValue };
}

describe('parseLabelledStatement', () => {
  beforeEach(run);

  it('should return a function called parseLabelledStatement', () => {
    expect(parseLabelledStatement).toBeInstanceOf(Function);
  });
});
