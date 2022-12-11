import { defaultVolume } from '../volumes/defaultVolume';
import { resolve } from '../../src/resolve';
import type { ResolveConfig } from '../../src/types/ResolveConfig';

const config: ResolveConfig = {
  fs: defaultVolume,
  conditions: ['node', 'import']
}
describe('imports', () => {
  it('should resolve imports beginning with a #', () => {
    const resolvedPath = resolve('/src/a.ts', '#utils', config);
    expect(resolvedPath).toBe('/utils.ts');
  });

  it('should resolve import wildcards', () => {
    const resolvedPath = resolve(
      '/src/a.ts',
      '#internal/test.ts',
      config
    );
    expect(resolvedPath).toBe('/internal/test.ts');
  });
});
