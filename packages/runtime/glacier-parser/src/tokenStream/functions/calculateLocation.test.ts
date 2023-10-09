import { calculateLocation } from './calculateLocation';
import { fakeTokenPosition } from '../../../test/fakes/fakeTokenPosition';
import { fakeSegment } from '../../../test/fakes/fakeSegment';
import type { TokenPosition } from '../interfaces/tokens/TokenPosition';
import type { Segment } from '../../segmentStream/interfaces/Segment';

function run() {
  const currentPosition = fakeTokenPosition();
  const segment = fakeSegment();
  const returnValue = calculateLocation(currentPosition, [segment]);
  return { returnValue };
}

describe('calculateLocation', () => {
  beforeEach(run);

  test('exports a function called calculateLocation', () => {
    expect(calculateLocation).toBeInstanceOf(Function);
  });

  it('should return correct position when no new line has been added', () => {
    const startPosition: TokenPosition = { line: 1, column: 0 };
    const segment: Segment = { type: 'LITERAL', value: 'class' };
    const tokenLocation = calculateLocation(startPosition, [segment]);
    expect(tokenLocation).toEqual({
      start: startPosition,
      end: { line: 1, column: 5 }
    });
  });

  it('should return correct position for multiple segments', () => {
    const startPosition: TokenPosition = { line: 1, column: 0 };
    const segment: Segment = { type: 'LITERAL', value: 'class' };
    const tokenLocation = calculateLocation(startPosition, [segment, segment]);
    expect(tokenLocation).toEqual({
      start: startPosition,
      end: { line: 1, column: 10 }
    });
  });

  it('should return correct position for multiple segments seperated by a new line', () => {
    const startPosition: TokenPosition = { line: 1, column: 0 };
    const segment: Segment = { type: 'LITERAL', value: 'class' };
    const newLine: Segment = { type: 'NEW_LINE', value: '\n' };
    const tokenLocation = calculateLocation(startPosition, [
      segment,
      newLine,
      segment
    ]);
    expect(tokenLocation).toEqual({
      start: startPosition,
      end: { line: 2, column: 5 }
    });
  });
});
