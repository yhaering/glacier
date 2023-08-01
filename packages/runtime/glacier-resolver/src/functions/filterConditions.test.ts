import { filterConditions } from './filterConditions';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';

function run(defaultConditions: string[] = [], conditions: string[] = []) {
  const resolverConfig = fakeResolverConfig();
  resolverConfig.conditions = defaultConditions;
  const returnValue = filterConditions(conditions, resolverConfig);
  return { returnValue };
}

describe('filterConditions', () => {
  beforeEach(run);

  test('exports a function called filterConditions', () => {
    expect(filterConditions).toBeInstanceOf(Function);
  });

  test('keep conditions that equal to "default"', () => {
    const { returnValue } = run([], ['default', 'a']);
    expect(returnValue).toEqual(['default']);
  });

  test('keep conditions that are defined in config', () => {
    const { returnValue } = run(['a'], ['a', 'b']);
    expect(returnValue).toEqual(['a']);
  });
});
