import { resolveModuleFields } from './resolveModuleFields';
import { getModuleConfig } from '../../fs/getModuleConfig';
import { resolve } from '../../../resolve';
import { createResolveConfigMock } from '../../../../test/mocks/createResolveConfigMock';

jest.mock('../../../resolve');
jest.mock('../../fs/getModuleConfig');

describe('resolveModuleFields', () => {
  beforeEach(() => {
    (resolve as jest.Mock).mockReturnValue('{{RESOLVED_PATH}}');
    (getModuleConfig as jest.Mock).mockReturnValue({
      '{{FIELD}}': '{{PATH}}'
    });
    const config = createResolveConfigMock();
    resolveModuleFields('{{CONFIG_PATH}}', config);
  });

  test('exports a function called resolveModuleFields', () => {
    expect(resolveModuleFields).toBeInstanceOf(Function);
  });

  test('calls getModuleConfig with config path', () => {
    expect(getModuleConfig).toHaveBeenCalledWith('{{CONFIG_PATH}}');
  });

  test('if field exist, call resolve', () => {
    const config = createResolveConfigMock();
    expect(resolve).toHaveBeenCalledWith('{{CONFIG_PATH}}', '{{PATH}}', config);
  });

  test('if resolve returns a string, return that string', () => {
    const config = createResolveConfigMock();
    const resolvedPath = resolveModuleFields('{{CONFIG_PATH}}', config);
    expect(resolvedPath).toBe('{{RESOLVED_PATH}}');
  });
});
