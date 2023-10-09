import type { TokenStreamContext } from '../../src/tokenStream/interfaces/TokenStreamContext';

export function fakeTokenStreamContext(): TokenStreamContext {
  return {
    location: {
      line: 1,
      column: 0
    }
  };
}
