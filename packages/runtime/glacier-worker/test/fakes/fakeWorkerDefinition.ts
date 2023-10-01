import type { WorkerDefinition } from '../../types';

export function fakeWorkerDefinition(): WorkerDefinition {
  return {
    '{{NAME}}': jest.fn().mockReturnValue('{{OUTPUT}}')
  };
}
