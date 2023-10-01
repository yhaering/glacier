import { assertMessagePort } from './assertMessagePort';
import { fakeMessagePort } from '../../../../test/fakes/fakeMessagePort';

function run() {
  const messagePort = fakeMessagePort();
  const returnValue = assertMessagePort(messagePort);
  return { returnValue };
}

function runWithoutMessagePort() {
  const returnValue = assertMessagePort(null);
  return { returnValue };
}

describe('assertMessagePort', () => {
  beforeEach(run);

  test('exports a function called assertMessagePort', () => {
    expect(assertMessagePort).toBeInstanceOf(Function);
  });

  describe('if parentPort is null', () => {
    test('throw an error', () => {
      expect(() => {
        runWithoutMessagePort();
      }).toThrow('Expected file to be started as worker.');
    });
  });
});
