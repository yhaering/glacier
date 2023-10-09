import type { TokenStreamCache } from '../../src/tokenStream/interfaces/TokenStreamCache';

export function fakeTokenStreamCache(): TokenStreamCache {
  return {
    nextToken: {
      type: 'STRING',
      loc: {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 10,
          column: 0
        }
      },
      stringType: 'SINGLE',
      value: '{{VALUE}}'
    }
  };
}
