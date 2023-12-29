import { parseDirective } from './parseDirective';

function run() {
  const returnValue = parseDirective();
  return { returnValue };
}

describe('parseDirective', () => {
  beforeEach(run);

  test('exports a function called parseDirective', () => {
    expect(parseDirective).toBeInstanceOf(Function);
  });

  test('returns undefined', () => {
    const { returnValue } = run();
    expect(returnValue).toBeUndefined();
  });
});
