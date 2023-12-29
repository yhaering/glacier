import { getOptions } from './getOptions';

function run() {
  const returnValue = getOptions();
  return { returnValue };
}

describe('getOptions', () => {
  beforeEach(run);

  test('exports a function called getOptions', () => {
    expect(getOptions).toBeInstanceOf(Function);
  });
});
