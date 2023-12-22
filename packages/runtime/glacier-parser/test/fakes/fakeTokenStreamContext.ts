import type { TokenStreamContext } from '../../src/tokenStream/interfaces/TokenStreamContext';

export function fakeTokenStreamContext(): TokenStreamContext {
  return {
    getLoc: jest.fn().mockReturnValue('{{LOC}}')
  };
}
