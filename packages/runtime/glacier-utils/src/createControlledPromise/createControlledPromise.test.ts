import { createControlledPromise } from './createControlledPromise';

async function run() {
  const returnValue = await createControlledPromise();
  return { returnValue };
}

describe('createControlledPromise', () => {
  beforeEach(run);

  test('exports a function called createControlledPromise', () => {
    expect(createControlledPromise).toBeInstanceOf(Function);
  });

  test('returns ControlledPromise', async () => {
    const { returnValue } = await run();
    expect(returnValue).toEqual({
      resolve: expect.any(Function),
      reject: expect.any(Function),
      promise: expect.any(Promise)
    });
  });

  it('should resolve the promise correctly', async () => {
    const { promise, resolve } = await createControlledPromise();
    setTimeout(() => resolve('{{VALUE}}'), 0);
    const value = await promise;
    expect(value).toBe('{{VALUE}}');
  });

  it('should reject the promise correctly', async () => {
    const { promise, reject } = await createControlledPromise();
    setTimeout(() => reject(new Error('Test')), 0);
    await expect(async () => {
      await promise;
    }).rejects.toThrow('Test');
  });
});
