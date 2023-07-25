import { createEmptyVolume } from './createEmptyVolume';

function run() {
  const returnValue = createEmptyVolume();
  return { returnValue };
}

describe('createEmptyVolume', () => {
  beforeEach(run);

  test('exports a function called createEmptyVolume', () => {
    expect(createEmptyVolume).toBeInstanceOf(Function);
  });

  test('returns an empty MemoryVolume', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'VOLUME',
      entries: new Map()
    });
  });
});
