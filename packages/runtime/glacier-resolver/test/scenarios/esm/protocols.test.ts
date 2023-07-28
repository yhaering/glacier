import { createDefaultResolver } from '../../helper/createDefaultResolver';

describe('ESM Protocols', () => {
  it('should resolve URLs', () => {
    const resolver = createDefaultResolver([]);
    const resolvedPath = resolver('http://localhost', '/');
    expect(resolvedPath).toBe('http://localhost');
  });
});
