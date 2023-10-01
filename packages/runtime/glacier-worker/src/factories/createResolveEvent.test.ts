import { createResolveEvent } from './createResolveEvent';

function run() {
  const returnValue = createResolveEvent('{{ID}}', '{{OUTPUT}}');
  return { returnValue };
}

describe('createResolveEvent', () => {
  beforeEach(run);

  test('exports a function called createResolveEvent', () => {
    expect(createResolveEvent).toBeInstanceOf(Function);
  });

  test('returns WorkerMessageResolve', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      id: '{{ID}}',
      type: 'resolve',
      output: '{{OUTPUT}}'
    });
  });
});
