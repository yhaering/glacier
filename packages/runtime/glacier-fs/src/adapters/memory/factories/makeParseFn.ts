import type { ParseFn } from '../../../interfaces/functions/ParseFn';

export function makeParseFn(): ParseFn {
  return (path) => {
    const root = path.startsWith('/') ? '/' : '';
    const segments = path.split('/').filter(Boolean);
    const base = segments.pop() ?? '';
    const extensions = base.split('.');
    const hasExtension = extensions.length > 1;

    return {
      root,
      dir: root + segments.join('/'),
      ext: hasExtension ? `.${extensions.at(-1)}` : '',
      name: hasExtension ? extensions.slice(0, -1).join('.') : extensions[0],
      base
    };
  };
}
