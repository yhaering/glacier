import { fakeParserContext } from '../../../test/fakes/fakeParserContext';
import { parseHoistableDeclaration } from './parseHoistableDeclaration';

function run() {
  const context = fakeParserContext();
  const returnValue = parseHoistableDeclaration(context);
  return { returnValue };
}

describe('parseHoistableDeclaration', () => {
  beforeEach(run);

  it('should return a function called parseHoistableDeclaration', () => {
    expect(parseHoistableDeclaration).toBeInstanceOf(Function);
  });
});
