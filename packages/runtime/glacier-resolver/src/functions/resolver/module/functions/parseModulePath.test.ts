import { parseModulePath } from './parseModulePath';

describe('parseModulePath', () => {
  beforeEach(() => {
    parseModulePath('{{NAME}}');
  });

  test('exports a function called parseModulePath', () => {
    expect(parseModulePath).toBeInstanceOf(Function);
  });

  test('returns the modules name', () => {
    expect(parseModulePath('{{NAME}}')).toEqual({ name: '{{NAME}}', path: '' });
  });

  test('returns the modules scope', () => {
    expect(parseModulePath('@{{SCOPE}}/{{NAME}}')).toEqual({
      name: '@{{SCOPE}}/{{NAME}}',
      path: ''
    });
  });

  test('returns the modules path', () => {
    expect(parseModulePath('{{NAME}}/{{PATH}}')).toEqual({
      name: '{{NAME}}',
      path: '{{PATH}}'
    });
  });
});
