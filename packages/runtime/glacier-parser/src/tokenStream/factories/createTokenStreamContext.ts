import type { TokenStreamContext } from '../interfaces/TokenStreamContext';
import type { TokenPosition } from '../interfaces/tokens/TokenPosition';
import { calculateLocation } from '../functions/calculateLocation';

export function createTokenStreamContext(): TokenStreamContext {
  let currentLocation: TokenPosition = { column: 0, line: 0 };
  return {
    getLoc: (segments) => {
      const nextLocation = calculateLocation(currentLocation, segments);
      currentLocation = { ...nextLocation.end };
      return nextLocation;
    }
  };
}
