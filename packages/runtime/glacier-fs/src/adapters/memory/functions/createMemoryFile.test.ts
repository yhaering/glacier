import { createMemoryFile } from './createMemoryFile';

function run() {
  const returnValue = createMemoryFile('{{NAME}}', Buffer.from('{{CONTENT}}'));
  return { returnValue };
}

describe('createMemoryFile', () => {
  beforeEach(run);

  test('exports a function called createMemoryFile', () => {
    expect(createMemoryFile).toBeInstanceOf(Function);
  });

  test('returns a MemoryFile', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'FILE',
      name: '{{NAME}}',
      content: Buffer.from('{{CONTENT}}')
    });
  });
});
