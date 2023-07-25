import { createMemoryDirectory } from './createMemoryDirectory';

function run() {
  const returnValue = createMemoryDirectory('{{NAME}}');
  return { returnValue };
}

describe('createMemoryDirectory', () => {
  beforeEach(run);

  test('exports a function called createMemoryDirectory', () => {
    expect(createMemoryDirectory).toBeInstanceOf(Function);
  });

  test('returns an empty MemoryDirectory', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'DIRECTORY',
      name: '{{NAME}}',
      entries: new Map()
    });
  });
});
