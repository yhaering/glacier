import type { Terminator } from '../../../interfaces/Terminator';

export function makeBrowserTerminator(): Terminator {
  return () => Promise.resolve();
}
