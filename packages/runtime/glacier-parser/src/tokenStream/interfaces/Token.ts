import type { CommentToken } from './tokens/CommentToken';
import type { IdentifierToken } from './tokens/IdentifierToken';
import type { KeywordToken } from './tokens/KeywordToken';
import type { OperatorToken } from './tokens/OperatorToken';
import type { PunctuationToken } from './tokens/PunctuationToken';
import type { RegexToken } from './tokens/RegexToken';
import type { StringToken } from './tokens/StringToken';
import type { UnknownToken } from './tokens/UnknownToken';
import type { WhitespaceToken } from './tokens/WhitespaceToken';

export type Token =
  | CommentToken
  | IdentifierToken
  | KeywordToken
  | OperatorToken
  | PunctuationToken
  | RegexToken
  | StringToken
  | UnknownToken
  | WhitespaceToken;
