import type { CharacterStream } from '../../src/characterStream/interfaces/CharacterStream';

export function fakeCharacterStream(): CharacterStream {
  return {
    next: jest.fn().mockReturnValue('{{CHAR}}'),
    peek: jest.fn().mockReturnValue('{{CHAR}}')
  };
}
