export interface Event<T> {
  on: (callback: (value: T) => void) => void;
  off: (callback: (value: T) => void) => void;
  emit: (value: T) => void;
}
