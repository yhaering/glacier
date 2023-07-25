import { parseJsonDirectory } from './parseJsonDirectory';
import { fakeMemoryVolume } from '../../../../test/fakes/fakeMemoryVolume';
import { fakeJsonVolume } from '../../../../test/fakes/fakeJsonVolume';
import { fakeEmptyMemoryVolume } from '../../../../test/fakes/fakeEmptyMemoryVolume';

function run() {
  const memoryVolume = fakeEmptyMemoryVolume();
  const jsonVolume = fakeJsonVolume();
  parseJsonDirectory(memoryVolume, jsonVolume);
  return { memoryVolume, jsonVolume };
}

describe('parseJsonDirectory', () => {
  beforeEach(run);

  test('exports a function called parseJsonDirectory', () => {
    expect(parseJsonDirectory).toBeInstanceOf(Function);
  });

  test('adds structure to MemoryVolume', () => {
    const { memoryVolume } = run();
    const volume = fakeMemoryVolume();

    expect(memoryVolume).toEqual(volume);
  });
});
