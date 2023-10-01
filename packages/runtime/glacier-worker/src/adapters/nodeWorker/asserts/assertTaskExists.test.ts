import { assertTaskExists } from './assertTaskExists';
import { fakeWorkerTask } from '../../../../test/fakes/fakeWorkerTask';

function run() {
  const task = fakeWorkerTask();
  const returnValue = assertTaskExists(task);
  return { returnValue };
}

function runWithoutTask() {
  const returnValue = assertTaskExists();
  return { returnValue };
}

describe('assertTaskExists', () => {
  beforeEach(run);

  test('exports a function called assertTaskExists', () => {
    expect(assertTaskExists).toBeInstanceOf(Function);
  });

  describe('if task is undefined', () => {
    test('throw an error', () => {
      expect(() => {
        runWithoutTask();
      }).toThrow('Expected task to exist');
    });
  });
});
