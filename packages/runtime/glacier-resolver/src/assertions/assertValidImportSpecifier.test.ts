import { assertValidImportSpecifier } from './assertValidImportSpecifier';

function run() {
  assertValidImportSpecifier('#mocks');
}

describe('assertValidImportSpecifier', () => {
  beforeEach(run);

  test('exports a function called assertValidImportSpecifier', () => {
    expect(assertValidImportSpecifier).toBeInstanceOf(Function);
  });

  describe('if specifier does not start with #', () => {
    test('throws an error', () => {
      expect(() => {
        assertValidImportSpecifier('./mocks');
      }).toThrow('Specifier ./mocks should start with #');
    });
  });

  describe('if specifier equals #', () => {
    test('throws an error', () => {
      expect(() => {
        assertValidImportSpecifier('#');
      }).toThrow('Specifier should not equal to #');
    });
  });

  describe('if specifier starts with #/', () => {
    test('throws an error', () => {
      expect(() => {
        assertValidImportSpecifier('#/mocks');
      }).toThrow('Specifier #/mocks should not start with #/');
    });
  });
});
