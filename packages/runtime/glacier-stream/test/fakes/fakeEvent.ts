import type { Event } from '../../src/interfaces/Event';

export function fakeEvent<O>(): Event<O> {
  return {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn()
  };
}
