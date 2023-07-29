import type { Exports } from '../interfaces/Exports';
import { InvalidPackageConfiguration } from '../exceptions/InvalidPackageConfiguration';

export function assertValidExportDefinition(exports: Exports) {
  if (typeof exports === 'object') {
    const hasKeyStartingWithDot = Object.keys(exports).find((key) =>
      key.startsWith('.')
    );
    const hasKeyNotStartingWithDot = Object.keys(exports).find(
      (key) => !key.startsWith('.')
    );
    if (hasKeyStartingWithDot && hasKeyNotStartingWithDot) {
      throw new InvalidPackageConfiguration();
    }
  }
}
