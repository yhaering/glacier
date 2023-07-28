import { createDefaultResolver } from '../../helper/createDefaultResolver';

describe('CJS Native', () => {
  it('should resolve native modules', () => {
    const resolver = createDefaultResolver([]);
    const resolvedPath = resolver('node:fs', '/');
    expect(resolvedPath).toBe('node:fs');
  });
});
