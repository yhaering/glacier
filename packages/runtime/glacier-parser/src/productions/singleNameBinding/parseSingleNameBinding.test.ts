import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseSingleNameBinding } from './parseSingleNameBinding';

function run() {
  const context = fakeParserContext();
  const returnValue = parseSingleNameBinding(context);
  return { returnValue };
}

describe('parseSingleNameBinding', () => {
  beforeEach(run);

  it('should return a function called parseSingleNameBinding', () => {
    expect(parseSingleNameBinding).toBeInstanceOf(Function);
  });
});
