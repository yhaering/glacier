import { createSegment } from './createSegment';

function run() {
  const returnValue = createSegment('NUMBER', '1');
  return { returnValue };
}

describe('createSegment', () => {
  beforeEach(run);

  test('exports a function called createSegment', () => {
    expect(createSegment).toBeInstanceOf(Function);
  });

  test('returns a segment', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual({
      type: 'NUMBER',
      value: '1'
    });
  });
});
