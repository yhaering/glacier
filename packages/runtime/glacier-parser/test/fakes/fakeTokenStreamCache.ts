import type { TokenStreamCache } from '../../src/tokenStream/interfaces/TokenStreamCache';

export function fakeTokenStreamCache(): TokenStreamCache {
  return {
    nextToken: {
      type: 'STRING',
      stringType: 'SINGLE',
      value: '{{VALUE}}'
    }
  };
}
