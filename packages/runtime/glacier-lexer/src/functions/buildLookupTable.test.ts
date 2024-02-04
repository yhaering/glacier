import { buildLookupTable } from './buildLookupTable';
import { getTokenType } from './getTokenType';
import { getProperties } from './getProperties';

jest.mock('./getTokenType', () => ({
  getTokenType: jest.fn().mockReturnValue('TEXT')
}));

jest.mock('./getProperties', () => ({
  getProperties: jest.fn().mockReturnValue([])
}));

function run() {
  const returnValue = buildLookupTable(0, 5);
  return { returnValue };
}

describe('buildLookupTable', () => {
  beforeEach(run);

  test('exports a function called buildLookupTable', () => {
    expect(buildLookupTable).toBeInstanceOf(Function);
  });

  test('calls getTokenType', () => {
    expect(getTokenType).toHaveBeenCalledWith(0);
    expect(getTokenType).toHaveBeenCalledWith(5);
  });

  test('calls getProperties', () => {
    expect(getProperties).toHaveBeenCalledWith(0);
    expect(getProperties).toHaveBeenCalledWith(5);
  });

  describe('if character has properties', () => {
    test('add metadata to lookup table', () => {
      (getProperties as jest.Mock).mockReturnValueOnce(['ID_START']);
      const { returnValue } = run();
      expect(returnValue).toEqual({
        0: {
          type: 'TEXT',
          props: ['ID_START']
        }
      });
    });
  });

  describe('if type is not "TEXT"', () => {
    test('add metadata to lookup table', () => {
      (getTokenType as jest.Mock).mockReturnValueOnce('DIGIT');
      const { returnValue } = run();
      expect(returnValue).toEqual({
        0: {
          type: 'DIGIT',
          props: []
        }
      });
    });
  });
});
