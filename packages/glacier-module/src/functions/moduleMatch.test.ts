import { ResolvedModule } from '../ResolvedModule';
import { ModuleFilter } from '../ModuleFilter';
import { moduleMatch } from './moduleMatch';

describe('moduleMatch', () => {
  it('should return true if module matches by source path', () => {
    const module = new ResolvedModule('/a/b.js');
    const config: ModuleFilter = { process: [/\.js/] };
    expect(moduleMatch(module, config)).toBe(true);
  });

  it('should return false if module matches exclude path', () => {
    const module = new ResolvedModule('/a/b.js');
    const config: ModuleFilter = { process: [/\.js/], exclude: [/a/] };
    expect(moduleMatch(module, config)).toBe(false);
  });

  it('should return true if at least one process rule matches', () => {
    const module = new ResolvedModule('/a/b.js');
    const config: ModuleFilter = { process: [/\.scss/, /\.js/] };
    expect(moduleMatch(module, config)).toBe(true);
  });

  it('should return false if at least one exclude rule matches', () => {
    const module = new ResolvedModule('/a/b.js');
    const config: ModuleFilter = { process: [/\.js/], exclude: [/x/, /a/] };
    expect(moduleMatch(module, config)).toBe(false);
  });
});
