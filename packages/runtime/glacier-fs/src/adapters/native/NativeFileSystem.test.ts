import { NativeFileSystem } from './NativeFileSystem';
import fs from 'fs';

jest.mock('fs');

describe('NativeFileSystem', () => {
  test('exports a class called NativeFileSystem', () => {
    expect(NativeFileSystem).toBeInstanceOf(Function);
  });

  describe('createDir', () => {
    beforeEach(() => {
      const instance = new NativeFileSystem();
      instance.createDir('{{PATH}}');
    });

    test('has a method called createDir', () => {
      expect(NativeFileSystem.prototype.createDir).toBeInstanceOf(Function);
    });

    test('calls fs.mkdirSync', () => {
      expect(fs.mkdirSync).toHaveBeenCalledWith('{{PATH}}', {
        recursive: true
      });
    });
  });

  describe('exists', () => {
    beforeEach(() => {
      jest.spyOn(fs, 'existsSync').mockReturnValue('{{EXISTS}}' as any);
      const instance = new NativeFileSystem();
      instance.exists('{{PATH}}');
    });

    test('has a method called exists', () => {
      expect(NativeFileSystem.prototype.exists).toBeInstanceOf(Function);
    });

    test('calls fs.existsSync', () => {
      expect(fs.existsSync).toHaveBeenCalledWith('{{PATH}}');
    });

    test('returns return value of fs.existsSync', () => {
      const instance = new NativeFileSystem();
      const returnValue = instance.exists('{{PATH}}');
      expect(returnValue).toBe('{{EXISTS}}');
    });
  });

  describe('isDirectory', () => {
    beforeEach(() => {
      jest.spyOn(fs, 'statSync').mockReturnValue({
        isDirectory: jest.fn().mockReturnValue('{{IS_DIRECTORY}}')
      } as any);
      const instance = new NativeFileSystem();
      instance.isDirectory('{{PATH}}');
    });

    test('has a method called isDirectory', () => {
      expect(NativeFileSystem.prototype.isDirectory).toBeInstanceOf(Function);
    });

    test('calls fs.statSync', () => {
      expect(fs.statSync).toHaveBeenCalledWith('{{PATH}}');
    });

    test('returns return value of isDirectory', () => {
      const instance = new NativeFileSystem();
      const returnValue = instance.isDirectory('{{PATH}}');
      expect(returnValue).toBe('{{IS_DIRECTORY}}');
    });
  });

  describe('isFile', () => {
    beforeEach(() => {
      jest.spyOn(fs, 'statSync').mockReturnValue({
        isFile: jest.fn().mockReturnValue('{{IS_FILE}}')
      } as any);
      const instance = new NativeFileSystem();
      instance.isFile('{{PATH}}');
    });

    test('has a method called isFile', () => {
      expect(NativeFileSystem.prototype.isFile).toBeInstanceOf(Function);
    });

    test('calls fs.statSync', () => {
      expect(fs.statSync).toHaveBeenCalledWith('{{PATH}}');
    });

    test('returns return value of isFile', () => {
      const instance = new NativeFileSystem();
      const returnValue = instance.isFile('{{PATH}}');
      expect(returnValue).toBe('{{IS_FILE}}');
    });
  });

  describe('readDir', () => {
    beforeEach(() => {
      jest.spyOn(fs, 'readdirSync').mockReturnValue(['{{FILE}}'] as any);
      const instance = new NativeFileSystem();
      instance.readDir('{{PATH}}');
    });

    test('has a method called readDir', () => {
      expect(NativeFileSystem.prototype.readDir).toBeInstanceOf(Function);
    });

    test('calls fs.readdirSync', () => {
      expect(fs.readdirSync).toHaveBeenCalledWith('{{PATH}}');
    });

    test('returns Set of entries', () => {
      const instance = new NativeFileSystem();
      const returnValue = instance.readDir('{{PATH}}');
      expect(returnValue).toEqual(new Set(['{{FILE}}']));
    });
  });

  describe('readFile', () => {
    beforeEach(() => {
      jest.spyOn(fs, 'readFileSync').mockReturnValue('{{BUFFER}}' as any);
      const instance = new NativeFileSystem();
      instance.readFile('{{PATH}}');
    });

    test('has a method called readFile', () => {
      expect(NativeFileSystem.prototype.readFile).toBeInstanceOf(Function);
    });

    test('calls fs.readFileSync', () => {
      expect(fs.readFileSync).toHaveBeenCalledWith('{{PATH}}');
    });

    test('returns return value of readFileSync', () => {
      const instance = new NativeFileSystem();
      const returnValue = instance.readFile('{{PATH}}');
      expect(returnValue).toEqual('{{BUFFER}}');
    });
  });

  describe('remove', () => {
    beforeEach(() => {
      const instance = new NativeFileSystem();
      instance.remove('{{PATH}}');
    });

    test('has a method called remove', () => {
      expect(NativeFileSystem.prototype.remove).toBeInstanceOf(Function);
    });

    test('calls fs.rmSync', () => {
      expect(fs.rmSync).toHaveBeenCalledWith('{{PATH}}', {
        force: true,
        recursive: true
      });
    });
  });

  describe('writeFile', () => {
    beforeEach(() => {
      const instance = new NativeFileSystem();
      instance.writeFile('{{PATH}}', Buffer.from(''));
    });

    test('has a method called writeFile', () => {
      expect(NativeFileSystem.prototype.writeFile).toBeInstanceOf(Function);
    });

    test('calls fs.writeFileSync', () => {
      const instance = new NativeFileSystem();
      const buffer = Buffer.from('');
      instance.writeFile('{{PATH}}', buffer);
      expect(fs.writeFileSync).toHaveBeenCalledWith('{{PATH}}', buffer);
    });
  });
});
