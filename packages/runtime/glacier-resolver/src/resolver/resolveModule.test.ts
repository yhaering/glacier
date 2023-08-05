import { resolveModule } from './resolveModule';
import { fakeResolverConfig } from '../../test/fakes/fakeResolverConfig';
import { resolvePjson } from './resolvePjson';
import { isRoot } from '../conditions/isRoot';

jest.mock('./resolvePjson', () => ({
  resolvePjson: jest.fn().mockReturnValue('{{RESOLVED_PJSON}}')
}));

jest.mock('../conditions/isRoot', () => ({
  isRoot: jest.fn().mockReturnValue(false)
}));

function run() {
  const resolverConfig = fakeResolverConfig();
  (resolverConfig.fs.exists as jest.Mock).mockReturnValueOnce(false);
  const returnValue = resolveModule(
    '{{PARENT_URL}}',
    '{{PACKAGE_NAME}}',
    '{{PACKAGE_SUB_PATH}}',
    resolverConfig
  );
  return { returnValue, resolverConfig };
}

function runWithPjson() {
  const resolverConfig = fakeResolverConfig();
  (resolverConfig.fs.exists as jest.Mock).mockReturnValueOnce(true);
  const returnValue = resolveModule(
    '{{PARENT_URL}}',
    '{{PACKAGE_NAME}}',
    '{{PACKAGE_SUB_PATH}}',
    resolverConfig
  );
  return { returnValue, resolverConfig };
}

function runWithRoot() {
  (isRoot as jest.Mock).mockReturnValue(true);
  return run();
}

describe('resolveModule', () => {
  beforeEach(run);

  test('exports a function called resolveModule', () => {
    expect(resolveModule).toBeInstanceOf(Function);
  });

  test('calls fs.resolve', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.resolve).toHaveBeenCalledWith(
      '{{PARENT_URL}}',
      'node_modules',
      '{{PACKAGE_NAME}}'
    );
  });

  test('calls fs.exists', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.exists).toHaveBeenCalledWith('{{RESOLVED}}');
  });

  test('calls isRoot', () => {
    const { resolverConfig } = run();
    expect(isRoot).toHaveBeenCalledWith('{{PARENT_URL}}', resolverConfig);
  });

  test('calls fs.resolve with ../', () => {
    const { resolverConfig } = run();
    expect(resolverConfig.fs.resolve).toHaveBeenCalledWith(
      '{{PARENT_URL}}',
      '../'
    );
  });

  describe('if package json exists', () => {
    beforeEach(runWithPjson);

    test('calls resolvePjson', () => {
      const { resolverConfig } = run();
      expect(resolvePjson).toHaveBeenCalledWith(
        '{{RESOLVED}}',
        '{{PACKAGE_SUB_PATH}}',
        resolverConfig
      );
    });

    test('returns return value of resolvePjson', () => {
      const { returnValue } = run();
      expect(returnValue).toBe('{{RESOLVED_PJSON}}');
    });
  });

  describe('root is reached', () => {
    test('return undefined', () => {
      const { returnValue } = runWithRoot();
      expect(returnValue).toBeUndefined();
    });
  });
});
