import type { PositionContext } from '../../src/parser/interfaces/PositionContext';
import { fakePosition } from './fakePosition';

export function fakePositionContext(): PositionContext {
  return {
    consume: jest.fn(),
    decorate: jest.fn().mockImplementation((fn: () => void) => fn()),
    getPosition: jest.fn().mockReturnValue(fakePosition())
  };
}
