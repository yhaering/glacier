import { parseModuleDeclaration } from './parseModuleDeclaration';

function run() {
  const returnValue = parseModuleDeclaration();
  return { returnValue };
}

describe('parseModuleDeclaration', () => {
  beforeEach(run);

  test('exports a function called parseModuleDeclaration', () => {
    expect(parseModuleDeclaration).toBeInstanceOf(Function);
  });

  test('returns undefined', () => {
    const { returnValue } = run();
    expect(returnValue).toBeUndefined();
  });
});
