import { createMemoryFs } from '../../src/adapters/memory/createMemoryFs';

describe('Scenario #3', () => {
  const volume = createMemoryFs();

  describe('createDir', () => {
    it('should throw an error if a file already exists', () => {
      expect(() => {
        volume.writeFile('/users/test', Buffer.from(''));
        volume.createDir('/users/test/a');
      }).toThrow();
    });
  });

  describe('remove', () => {
    it('should throw an error if path is /', () => {
      expect(() => {
        volume.remove('/');
      }).toThrow();
    });
  });

  describe('writeFile', () => {
    it('should throw an error if path is /', () => {
      expect(() => {
        volume.writeFile('/', Buffer.from(''));
      }).toThrow();
    });
  });

  describe('readDir', () => {
    it('should throw an error if path is not a directory', () => {
      expect(() => {
        volume.writeFile('/unknown.txt', Buffer.from(''));
        volume.readDir('/unknown.txt');
      }).toThrow();
    });
  });

  describe('readFile', () => {
    it('should throw an error if path is not a file', () => {
      expect(() => {
        volume.createDir('/unknown');
        volume.readFile('/unknown');
      }).toThrow();
    });
  });

  describe('isDirectory', () => {
    it('should throw an error if entry does not exist', () => {
      expect(() => {
        volume.isDirectory('/test');
      }).toThrow();
    });
  });

  describe('isFile', () => {
    it('should throw an error if entry does not exist', () => {
      expect(() => {
        volume.isFile('/test');
      }).toThrow();
    });
  });
});
