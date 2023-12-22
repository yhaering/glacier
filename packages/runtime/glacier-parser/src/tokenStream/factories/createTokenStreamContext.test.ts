import { createTokenStreamContext } from './createTokenStreamContext';
import { fakeSegment } from '../../../test/fakes/fakeSegment';
import { calculateLocation } from '../functions/calculateLocation';

jest.mock('../functions/calculateLocation', () => ({
  calculateLocation: jest.fn().mockReturnValue({
    end: {
      column: '{{COLUMN}}',
      line: '{{LINE}}'
    }
  })
}));

function run() {
  const returnValue = createTokenStreamContext();
  return { returnValue };
}

describe('createTokenStreamContext', () => {
  beforeEach(run);

  test('exports a function called createTokenStreamContext', () => {
    expect(createTokenStreamContext).toBeInstanceOf(Function);
  });

  test('returns an object where getLoc is a function', () => {
    const { returnValue } = run();
    expect(returnValue.getLoc).toBeInstanceOf(Function);
  });

  describe('getLoc', () => {
    test('calls calculateLocation', () => {
      const { returnValue } = run();
      const segment = fakeSegment();
      returnValue.getLoc([segment]);
      expect(calculateLocation).toHaveBeenCalledWith({ column: 0, line: 0 }, [
        segment
      ]);
    });

    test('set current location to end of last location', () => {
      const { returnValue } = run();
      const segment = fakeSegment();
      returnValue.getLoc([segment]);
      returnValue.getLoc([segment]);
      expect(calculateLocation).toHaveBeenCalledWith({ column: 0, line: 0 }, [
        segment
      ]);
      expect(calculateLocation).toHaveBeenCalledWith(
        { column: '{{COLUMN}}', line: '{{LINE}}' },
        [segment]
      );
    });
  });
});
