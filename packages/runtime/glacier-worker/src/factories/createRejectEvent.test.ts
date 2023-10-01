import { createRejectEvent } from './createRejectEvent';

function run() {
  const returnValue = createRejectEvent('{{ID}}', '{{ERROR}}');
  return { returnValue };
}

describe('createRejectEvent', () => {
  beforeEach(run);

  test('exports a function called createRejectEvent', () => {
    expect(createRejectEvent).toBeInstanceOf(Function);
  });

  test('returns WorkerMessageReject', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'reject',
      id: '{{ID}}',
      error: '{{ERROR}}'
    });
  });
});
