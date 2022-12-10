import { resolve } from './resolve';

describe('resolve', () => {
  test('exports a function called resolve', () => {
    expect(resolve).toBeInstanceOf(Function);
  });
});
