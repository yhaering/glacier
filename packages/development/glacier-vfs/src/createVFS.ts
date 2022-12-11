import type { VirtualFileSystem } from './types/VirtualFileSystem';
import { compileVolume } from './functions/compileVolume';
import type { JSONVolume } from './types/JSONVolume';
import { createExistsSync } from './fs/createExistsSync';
import { createReadFileSync } from './fs/createReadFileSync';
import { createLstatSync } from './fs/createLstatSync';

export function createVFS(json: JSONVolume): VirtualFileSystem {
  const virtualVolume = compileVolume(json);
  return {
    existsSync: createExistsSync(virtualVolume),
    readFileSync: createReadFileSync(virtualVolume),
    lstatSync: createLstatSync(virtualVolume)
  };
}
