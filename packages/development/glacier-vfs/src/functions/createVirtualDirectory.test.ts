import { createVirtualDirectory } from './createVirtualDirectory';

describe('createVirtualDirectory', () => {
  test('exports a function called createVirtualDirectory', () => {
    expect(createVirtualDirectory).toBeInstanceOf(Function);
  });

  test('returns a virtual directory', () => {
    expect(createVirtualDirectory()).toEqual({
      type: 'directory'
    });
  });
});
