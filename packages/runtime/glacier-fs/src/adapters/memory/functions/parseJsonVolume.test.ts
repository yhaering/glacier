import { parseJsonVolume } from './parseJsonVolume';
import { fakeJsonVolume } from '../../../../test/fakes/fakeJsonVolume';
import { createEmptyVolume } from './createEmptyVolume';
import { parseJsonDirectory } from './parseJsonDirectory';

jest.mock('./createEmptyVolume', () => ({
  createEmptyVolume: jest.fn().mockReturnValue('{{VOLUME}}')
}));

jest.mock('./parseJsonDirectory', () => ({
  parseJsonDirectory: jest.fn()
}));

function run() {
  const volume = fakeJsonVolume();
  const returnValue = parseJsonVolume(volume);
  return { returnValue };
}

describe('parseJsonVolume', () => {
  beforeEach(run);

  test('exports a function called parseJsonVolume', () => {
    expect(parseJsonVolume).toBeInstanceOf(Function);
  });

  test('calls createEmptyVolume', () => {
    expect(createEmptyVolume).toHaveBeenCalledWith();
  });

  test('calls parseJsonDirectory', () => {
    const memoryVolume = createEmptyVolume();
    const jsonVolume = fakeJsonVolume();
    expect(parseJsonDirectory).toHaveBeenCalledWith(memoryVolume, jsonVolume);
  });

  test('returns MemoryVolume', () => {
    const memoryVolume = createEmptyVolume();
    const { returnValue } = run();
    expect(returnValue).toEqual(memoryVolume);
  });
});
