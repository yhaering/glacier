import { makeParseFn } from './makeParseFn';
import path from 'node:path';

function run(path = '/') {
  const fn = makeParseFn();
  const returnValue = fn(path);
  return { fn, returnValue };
}

describe('makeParseFn', () => {
  beforeEach(run);

  test('exports a function called makeParseFn', () => {
    expect(makeParseFn).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('/', () => {
    const { returnValue } = run('/');
    expect(returnValue).toEqual(path.parse('/'));
  });

  test('/a', () => {
    const { returnValue } = run('/a');
    expect(returnValue).toEqual(path.parse('/a'));
  });

  test('/a/b', () => {
    const { returnValue } = run('/a/b');
    expect(returnValue).toEqual(path.parse('/a/b'));
  });

  test('/a/b.txt', () => {
    const { returnValue } = run('/a/b.txt');
    expect(returnValue).toEqual(path.parse('/a/b.txt'));
  });

  test('./a/b.txt', () => {
    const { returnValue } = run('./a/b.txt');
    expect(returnValue).toEqual(path.parse('./a/b.txt'));
  });

  test('./a/b.txt.zip', () => {
    const { returnValue } = run('./a/b.txt.zip');
    expect(returnValue).toEqual(path.parse('./a/b.txt.zip'));
  });

  test('./a/../b.txt', () => {
    const { returnValue } = run('./a/../b.txt');
    expect(returnValue).toEqual(path.parse('./a/../b.txt'));
  });
});
