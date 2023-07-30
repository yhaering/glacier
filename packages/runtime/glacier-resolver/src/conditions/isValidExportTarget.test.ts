import { isValidExportTarget } from './isValidExportTarget';
import { isValidURL } from './isValidURL';

jest.mock('./isValidURL', () => ({
  isValidURL: jest.fn()
}));

function run(target = './test') {
  const returnValue = isValidExportTarget(target);
  return { returnValue };
}

describe('isValidExportTarget', () => {
  beforeEach(run);

  test('exports a function called isValidExportTarget', () => {
    expect(isValidExportTarget).toBeInstanceOf(Function);
  });

  test('returns true if export target is valid', () => {
    const { returnValue } = run();
    expect(returnValue).toBe(true);
  });

  test('returns false if export target starts with ../', () => {
    const { returnValue } = run('../test');
    expect(returnValue).toBe(false);
  });

  test('returns false if export target starts with /', () => {
    const { returnValue } = run('/test');
    expect(returnValue).toBe(false);
  });

  test('calls isValidURL', () => {
    run('http://test');
    expect(isValidURL).toHaveBeenCalledWith('http://test');
  });

  test('returns false if isValidURL returns true', () => {
    (isValidURL as jest.Mock).mockReturnValue(true);
    const { returnValue } = run('http://test');
    expect(returnValue).toBe(false);
  });
});
