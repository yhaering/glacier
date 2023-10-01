import type { RoundRobinFn } from './interfaces/RoundRobinFn';

export function createRoundRobin<T>(items: T[]): RoundRobinFn<T> {
  let currentIndex = -1;
  return () => {
    currentIndex = (currentIndex + 1) % items.length;
    return items[currentIndex];
  };
}
