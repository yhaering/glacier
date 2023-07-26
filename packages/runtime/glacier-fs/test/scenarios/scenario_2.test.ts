import { createMemoryFs } from '../../src/adapters/memory/createMemoryFs';

describe('Scenario #2', () => {
  const volume = createMemoryFs({
    users: {
      'test.txt': 'Test',
      home: {
        'test.txt': 'Test'
      }
    }
  });

  it('should contain all entries', () => {
    expect(volume.exists('/users/test.txt')).toBe(true);
    expect(volume.exists('/users/home/test.txt')).toBe(true);
  });
});
