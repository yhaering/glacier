import type { Event } from '../interfaces/Event';

export function createEvent<T>(): Event<T> {
  const listener = new Set<(value: T) => void>();
  return {
    on: (callback) => {
      listener.add(callback);
    },
    off: (callback) => {
      listener.delete(callback);
    },
    emit: (value) => {
      for (const callback of listener) {
        callback(value);
      }
    }
  };
}
