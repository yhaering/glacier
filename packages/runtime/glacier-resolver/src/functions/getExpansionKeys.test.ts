import { getExpansionKeys } from './getExpansionKeys';
import { fakeExportConditions } from '../../test/fakes/fakeExportConditions';
import { patternKeyCompare } from './patternKeyCompare';

jest.mock('./patternKeyCompare', () => ({
  patternKeyCompare: jest.fn()
}));

function run() {
  const exportConditions = fakeExportConditions();
  const returnValue = getExpansionKeys(exportConditions);
  return { returnValue };
}

describe('getExpansionKeys', () => {
  beforeEach(run);

  test('exports a function called getExpansionKeys', () => {
    expect(getExpansionKeys).toBeInstanceOf(Function);
  });

  test('calls patternKeyCompare', () => {
    expect(patternKeyCompare).toHaveBeenCalledWith(
      './mocks/*.js',
      './test/*.js'
    );
  });
});
