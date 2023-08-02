import type { PackageJson } from '../../src/interfaces/PackageJson';
import { fakeExportConditions } from './fakeExportConditions';

export function fakePackageJson(): PackageJson {
  return {
    name: 'test',
    main: './index.js',
    type: 'module',
    exports: fakeExportConditions(),
    imports: fakeExportConditions()
  };
}
