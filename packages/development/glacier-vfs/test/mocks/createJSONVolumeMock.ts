import type { JSONVolume } from '../../src/types/JSONVolume';

export function createJSONVolumeMock(): JSONVolume {
  return {
    '/{{PATH_FILE}}': '{{FILE_CONTENT}}',
    '/{{PATH_DIR}}': {
      '{{PATH_SUB}}': '{{SUB_CONTENT}}'
    }
  };
}
