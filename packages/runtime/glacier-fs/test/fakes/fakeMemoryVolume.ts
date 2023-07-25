import type { MemoryVolume } from '../../src/adapters/memory/interfaces/MemoryVolume';

export function fakeMemoryVolume(): MemoryVolume {
  return {
    type: 'VOLUME',
    entries: new Map([
      [
        'users',
        {
          type: 'DIRECTORY',
          name: 'users',
          entries: new Map([
            [
              'home',
              {
                type: 'DIRECTORY',
                name: 'home',
                entries: new Map([
                  [
                    'index.txt',
                    {
                      type: 'FILE',
                      name: 'index.txt',
                      content: Buffer.from('Hello World')
                    }
                  ]
                ])
              }
            ]
          ])
        }
      ]
    ])
  };
}
