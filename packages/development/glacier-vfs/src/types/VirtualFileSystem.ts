import type { createExistsSync } from '../fs/createExistsSync';
import type { createReadFileSync } from '../fs/createReadFileSync';
import type { createLstatSync } from '../fs/createLstatSync';

export interface VirtualFileSystem {
  existsSync: ReturnType<typeof createExistsSync>;
  readFileSync: ReturnType<typeof createReadFileSync>;
  lstatSync: ReturnType<typeof createLstatSync>;
}
