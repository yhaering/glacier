import type { JsonVolume } from '../../src/adapters/memory/interfaces/JsonVolume';

export function fakeJsonVolume(): JsonVolume {
  return {
    users: {
      home: {
        'index.txt': 'Hello World'
      }
    }
  };
}
