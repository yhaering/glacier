import { createWorkers } from './createWorkers';

function run() {
  const factory = jest.fn().mockReturnValue('{{WORKER}}');
  const returnValue = createWorkers(3, factory);
  return { returnValue, factory };
}

describe('createWorkers', () => {
  beforeEach(run);

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('exports a function called createWorkers', () => {
    expect(createWorkers).toBeInstanceOf(Function);
  });

  test('calls factory 3 times', () => {
    const { factory } = run();
    expect(factory).toHaveBeenCalledTimes(3);
  });

  test('returns workers', () => {
    const { returnValue } = run();
    expect(returnValue).toEqual(['{{WORKER}}', '{{WORKER}}', '{{WORKER}}']);
  });
});
