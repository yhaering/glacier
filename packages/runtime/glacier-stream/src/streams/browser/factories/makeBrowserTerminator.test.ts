import { makeBrowserTerminator } from './makeBrowserTerminator';

function run() {
  jest.spyOn(Promise, 'resolve');
  const returnValue = makeBrowserTerminator();
  return { returnValue };
}

describe('makeBrowserTerminator', () => {
  beforeEach(run);

  test('exports a function called makeBrowserTerminator', () => {
    expect(makeBrowserTerminator).toBeInstanceOf(Function);
  });

  test('returns a function', () => {
    const { returnValue } = run();
    expect(returnValue).toBeInstanceOf(Function);
  });

  test('calls Promise.resolve', async () => {
    const { returnValue } = run();
    await returnValue();
    expect(Promise.resolve).toHaveBeenCalledWith();
  });
});
