import { getProperties } from './getProperties';
import { isIDStart } from '../checks/isIDStart';
import { isIDContinue } from '../checks/isIDContinue';

jest.mock('../checks/isIDStart');
jest.mock('../checks/isIDContinue');

function run() {
  const returnValue = getProperties(48);
  return { returnValue };
}

describe('getProperties', () => {
  beforeEach(run);

  test('exports a function called getProperties', () => {
    expect(getProperties).toBeInstanceOf(Function);
  });

  test('calls isIDStart', () => {
    expect(isIDStart).toHaveBeenCalledWith('0');
  });

  test('calls isIDContinue', () => {
    expect(isIDContinue).toHaveBeenCalledWith('0');
  });

  test('returns property list', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual([]);
  });

  describe('if isIDStart returns true', () => {
    test('add "ID_START" to properties array', () => {
      (isIDStart as jest.Mock).mockReturnValueOnce(true);
      const { returnValue } = run();
      expect(returnValue).toEqual(['ID_START']);
    });
  });

  describe('if isIDContinue returns true', () => {
    test('add "ID_CONTINUE" to properties array', () => {
      (isIDContinue as jest.Mock).mockReturnValueOnce(true);
      const { returnValue } = run();
      expect(returnValue).toEqual(['ID_CONTINUE']);
    });
  });
});
