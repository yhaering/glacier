import { createExistsSync } from './createExistsSync';

describe('createExistsSync', () => {
  beforeEach(() => {
    createExistsSync(new Map());
  });

  test('exports a function called createExistsSync', () => {
    expect(createExistsSync).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    expect(createExistsSync(new Map())).toBeInstanceOf(Function);
  });

  test('calls map.has and returns value', () => {
    const volume = new Map();
    jest.spyOn(volume, 'has').mockReturnValue(true);
    const existsSync = createExistsSync(volume);
    expect(existsSync('{{PATH}}')).toBe(true);
    expect(volume.has).toHaveBeenCalledWith('{{PATH}}');
  });
});
