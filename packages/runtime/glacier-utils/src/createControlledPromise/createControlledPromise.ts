import type { ControlledPromise } from './interfaces/ControlledPromise';

export function createControlledPromise<T>(): Promise<ControlledPromise<T>> {
  return new Promise((resolve) => {
    const controlledPromise: Partial<ControlledPromise<T>> = {};
    controlledPromise.promise = new Promise(
      (internalResolve, internalReject) => {
        controlledPromise.resolve = internalResolve;
        controlledPromise.reject = internalReject;
        resolve(controlledPromise as ControlledPromise<T>);
      }
    );
  });
}
