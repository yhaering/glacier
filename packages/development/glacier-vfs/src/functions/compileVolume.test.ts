import { compileVolume } from './compileVolume';
import { compileDirectory } from './compileDirectory';

jest.mock('./compileDirectory');

describe('compileVolume', () => {
  beforeEach(() => {
    compileVolume({});
  });

  test('exports a function called compileVolume', () => {
    expect(compileVolume).toBeInstanceOf(Function);
  });

  test('calls compileDirectory', () => {
    expect(compileDirectory).toHaveBeenCalledWith({}, [], new Map());
  });

  test('returns a map', () => {
    expect(compileVolume({})).toBeInstanceOf(Map);
  });
});
