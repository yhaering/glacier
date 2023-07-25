import { createMemoryVolume } from './createMemoryVolume';
import { createEmptyVolume } from './createEmptyVolume';
import { fakeJsonVolume } from '../../../../test/fakes/fakeJsonVolume';
import { parseJsonVolume } from './parseJsonVolume';

jest.mock('./parseJsonVolume', () => ({
  parseJsonVolume: jest.fn().mockReturnValue('{{PARSED_JSON_VOLUME}}')
}));

jest.mock('./createEmptyVolume', () => ({
  createEmptyVolume: jest.fn().mockReturnValue('{{EMPTY_VOLUME}}')
}));

function run() {
  const returnValue = createMemoryVolume();
  return { returnValue };
}

function runWithVolume() {
  const jsonVolume = fakeJsonVolume();
  const returnValue = createMemoryVolume(jsonVolume);
  return { returnValue };
}

describe('createMemoryVolume', () => {
  beforeEach(run);

  test('exports a function called createMemoryVolume', () => {
    expect(createMemoryVolume).toBeInstanceOf(Function);
  });

  test('calls createEmptyVolume', () => {
    expect(createEmptyVolume).toHaveBeenCalledWith();
  });

  test('returns return value of createEmptyVolume', () => {
    const { returnValue } = run();
    const emptyVolume = createEmptyVolume();
    expect(returnValue).toEqual(emptyVolume);
  });

  describe('if volume is defined', () => {
    beforeEach(runWithVolume);

    test('calls parseJsonVolume', () => {
      const jsonVolume = fakeJsonVolume();
      expect(parseJsonVolume).toHaveBeenCalledWith(jsonVolume);
    });

    test('returns return value of parseJsonVolume', () => {
      const { returnValue } = runWithVolume();
      const jsonVolume = fakeJsonVolume();
      const memoryVolume = parseJsonVolume(jsonVolume);
      expect(returnValue).toEqual(memoryVolume);
    });
  });
});
