export function fakeWebWorker(): Worker {
  return {
    addEventListener: jest.fn(),
    terminate: jest.fn(),
    postMessage: jest.fn()
  } as unknown as Worker;
}
