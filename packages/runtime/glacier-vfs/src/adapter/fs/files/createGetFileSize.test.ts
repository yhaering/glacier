import { createGetFileSize } from './createGetFileSize';
import fs from 'fs';

function run() {
  jest.spyOn(fs, 'statSync').mockReturnValue({ size: 5 } as any);
  const fnc = createGetFileSize();
  const returnValue = fnc('{{PATH}}');
  return { fnc, returnValue };
}

describe('createGetFileSize', () => {
  beforeEach(run);

  test('exports a function called createGetFileSize', () => {
    expect(createGetFileSize).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { fnc } = run();
    expect(fnc).toBeInstanceOf(Function);
  });

  test('returns correct size', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(5);
  });
});
