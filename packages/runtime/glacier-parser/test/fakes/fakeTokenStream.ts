import type { TokenStream } from '../../src/tokenStream/interfaces/TokenStream';

export function fakeTokenStream(): TokenStream {
  return {
    next: jest.fn().mockReturnValue('{{TOKEN}}'),
    peek: jest.fn().mockReturnValue('{{TOKEN}}')
  };
}
