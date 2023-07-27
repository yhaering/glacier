import { makeFormatFn } from './makeFormatFn';
import { fakeParsedPath } from '../../../../test/fakes/fakeParsedPath';
import type { PartialParsedPath } from '../../../interfaces/PartialParsedPath';

function run(parsedPath: PartialParsedPath = fakeParsedPath()) {
  const fn = makeFormatFn();
  const returnValue = fn(parsedPath);
  return { fn, returnValue };
}

describe('makeFormatFn', () => {
  beforeEach(run);

  test('exports a function called makeFormatFn', () => {
    expect(makeFormatFn).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('prefer dir over root', () => {
    const { returnValue } = run({
      dir: '/home/user/dir',
      base: 'file.txt'
    });
    expect(returnValue).toBe('/home/user/dir/file.txt');
  });

  test('use root if dir is not set', () => {
    const { returnValue } = run({
      root: '/',
      base: 'file.txt'
    });
    expect(returnValue).toBe('/file.txt');
  });

  test('use name and ext over base', () => {
    const { returnValue } = run({
      root: '/',
      name: 'file',
      ext: '.txt'
    });
    expect(returnValue).toBe('/file.txt');
  });

  test('adds the extension dot if not defined', () => {
    const { returnValue } = run({
      root: '/',
      name: 'file',
      ext: 'txt',
      base: 'file.txt',
      dir: ''
    });
    expect(returnValue).toBe('/file.txt');
  });
});
