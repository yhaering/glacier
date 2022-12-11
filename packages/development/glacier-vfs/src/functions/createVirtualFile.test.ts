import { createVirtualFile } from './createVirtualFile';

describe('createVirtualFile', () => {
  test('exports a function called createVirtualFile', () => {
    expect(createVirtualFile).toBeInstanceOf(Function);
  });

  test('creates a new virtual file', () => {
    expect(createVirtualFile('{{CONTENT}}')).toEqual({
      type: 'file',
      content: '{{CONTENT}}'
    });
  });
});
