import { createExecuteEvent } from './createExecuteEvent';

function run() {
  const returnValue = createExecuteEvent('{{ID}}', '{{NAME}}', '{{INPUT}}');
  return { returnValue };
}

describe('createExecuteEvent', () => {
  beforeEach(run);

  test('exports a function called createExecuteEvent', () => {
    expect(createExecuteEvent).toBeInstanceOf(Function);
  });

  test('returns WorkerMessageExecute', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'execute',
      id: '{{ID}}',
      name: '{{NAME}}',
      input: '{{INPUT}}'
    });
  });
});
