import { createEvent } from './createEvent';

function run() {
  const returnValue = createEvent();
  return { returnValue };
}

describe('createEvent', () => {
  beforeEach(run);

  test('exports a function called createEvent', () => {
    expect(createEvent).toBeInstanceOf(Function);
  });

  test('should call all listeners on emit', () => {
    const listener = jest.fn();
    const event = createEvent<string>();
    event.on(listener);
    event.emit('test');
    expect(listener).toHaveBeenCalledWith('test');
  });

  test('should not call listeners after unregister', () => {
    const listener = jest.fn();
    const event = createEvent<string>();
    event.on(listener);
    event.emit('test');
    event.off(listener);
    expect(listener).toHaveBeenCalledWith('test');
  });
});
