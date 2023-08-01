import { getMainExports } from './getMainExports';
import type { Exports } from '../interfaces/Exports';

function run(exports: Exports = '{{EXPORTS}}') {
  const returnValue = getMainExports(exports);
  return { returnValue };
}

describe('getMainExports', () => {
  beforeEach(run);

  test('exports a function called getMainExports', () => {
    expect(getMainExports).toBeInstanceOf(Function);
  });

  describe('if exports is a string', () => {
    test('return the string', () => {
      const { returnValue } = run('{{EXPORTS}}');
      expect(returnValue).toBe('{{EXPORTS}}');
    });
  });

  describe('if exports is a an array', () => {
    test('return the array', () => {
      const { returnValue } = run([]);
      expect(returnValue).toEqual([]);
    });
  });

  describe('if exports is a an object with all keys not starting with a dot', () => {
    test('return the object', () => {
      const { returnValue } = run({ node: 'test' });
      expect(returnValue).toEqual({ node: 'test' });
    });
  });

  describe('if exports is a an object with a key called .', () => {
    test('return the value of the key', () => {
      const { returnValue } = run({ '.': 'test' });
      expect(returnValue).toEqual('test');
    });
  });

  describe('if exports is a an object relative paths as keys', () => {
    test('return undefined', () => {
      const { returnValue } = run({ './': 'test' });
      expect(returnValue).toBeUndefined();
    });
  });
});
