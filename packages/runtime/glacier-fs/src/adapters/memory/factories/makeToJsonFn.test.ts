import { makeToJsonFn } from './makeToJsonFn';
import { fakeMemoryVolume } from '../../../../test/fakes/fakeMemoryVolume';

function run() {
  const volume = fakeMemoryVolume();
  const fn = makeToJsonFn(volume);
  const returnValue = fn();
  return { fn, returnValue };
}

describe('makeToJsonFn', () => {
  beforeEach(run);

  test('exports a function called makeToJsonFn', () => {
    expect(makeToJsonFn).toBeInstanceOf(Function);
  });

  test('creates a new function', () => {
    const { fn } = run();
    expect(fn).toBeInstanceOf(Function);
  });

  test('returns json representation', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      users: {
        home: {
          'index.txt': 'Hello World'
        }
      }
    });
  });
});
