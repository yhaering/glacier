import { whileDecimal } from './whileDecimal';
import { isNumber } from './isNumber';

jest.mock('./isNumber', () => ({
  isNumber: jest.fn().mockReturnValue('{{IS_NUMBER}}')
}));

function run(char = '{{CHAR}}', characters = '') {
  const returnValue = whileDecimal(char, characters);
  return { returnValue };
}

describe('whileDecimal', () => {
  beforeEach(run);

  test('exports a function called whileDecimal', () => {
    expect(whileDecimal).toBeInstanceOf(Function);
  });

  test('calls isNumber', () => {
    expect(isNumber).toHaveBeenCalledWith('{{CHAR}}');
  });

  test('returns return value of isNumber', () => {
    const { returnValue } = run();
    expect(returnValue).toBe('{{IS_NUMBER}}');
  });

  describe('if last character is "n"', () => {
    test('returns false', () => {
      const { returnValue } = run('{{CHAR}}', 'n');
      expect(returnValue).toBe(false);
    });
  });

  describe('if current character is "n"', () => {
    test('returns true', () => {
      const { returnValue } = run('n', '');
      expect(returnValue).toBe(true);
    });
  });

  describe('if current character is "."', () => {
    describe('if no dot is present', () => {
      test('returns true', () => {
        const { returnValue } = run('.', '');
        expect(returnValue).toBe(true);
      });
    });

    describe('if a dot is present', () => {
      test('returns false', () => {
        const { returnValue } = run('.', '.');
        expect(returnValue).toBe(false);
      });
    });
  });

  describe('if current character is "e"', () => {
    describe('if an e is present', () => {
      test('returns false', () => {
        const { returnValue } = run('e', 'e');
        expect(returnValue).toBe(false);
      });
    });

    describe('if an E is present', () => {
      test('returns false', () => {
        const { returnValue } = run('e', 'E');
        expect(returnValue).toBe(false);
      });
    });

    describe('if no e is present', () => {
      test('returns true', () => {
        const { returnValue } = run('e', '');
        expect(returnValue).toBe(true);
      });
    });
  });

  describe('if current character is "E"', () => {
    describe('if an e is present', () => {
      test('returns false', () => {
        const { returnValue } = run('E', 'e');
        expect(returnValue).toBe(false);
      });
    });

    describe('if an E is present', () => {
      test('returns false', () => {
        const { returnValue } = run('E', 'E');
        expect(returnValue).toBe(false);
      });
    });

    describe('if no e is present', () => {
      test('returns true', () => {
        const { returnValue } = run('E', '');
        expect(returnValue).toBe(true);
      });
    });
  });

  describe('if current character is "+"', () => {
    describe('if last character is "E"', () => {
      test('returns true', () => {
        const { returnValue } = run('+', 'E');
        expect(returnValue).toBe(true);
      });
    });

    describe('if last character is "e"', () => {
      test('returns true', () => {
        const { returnValue } = run('+', 'e');
        expect(returnValue).toBe(true);
      });
    });

    describe('if last character is not "E"', () => {
      test('returns false', () => {
        const { returnValue } = run('+', '');
        expect(returnValue).toBe(false);
      });
    });
  });

  describe('if current character is "-"', () => {
    describe('if last character is "E"', () => {
      test('returns true', () => {
        const { returnValue } = run('-', 'E');
        expect(returnValue).toBe(true);
      });
    });

    describe('if last character is "e"', () => {
      test('returns true', () => {
        const { returnValue } = run('-', 'e');
        expect(returnValue).toBe(true);
      });
    });

    describe('if last character is not "E"', () => {
      test('returns false', () => {
        const { returnValue } = run('-', '');
        expect(returnValue).toBe(false);
      });
    });
  });
});
