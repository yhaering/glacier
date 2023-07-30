import { isPrivateMapping } from './isPrivateMapping';

function run(specifier = '#mocks') {
  const returnValue = isPrivateMapping(specifier);
  return { returnValue };
}

describe('isPrivateMapping', () => {
  beforeEach(run);

  test('exports a function called isPrivateMapping', () => {
    expect(isPrivateMapping).toBeInstanceOf(Function);
  });

  test('returns true if specifier starts with #', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });

  test('returns false if specifier does not start with #', () => {
    const { returnValue } = run('mocks');
    expect(returnValue).toBe(false);
  });
});
