import type { CommentToken } from './tokens/CommentToken';
import type { IdentifierToken } from './tokens/IdentifierToken';
import type { KeywordToken } from './tokens/KeywordToken';
import type { PunctuationToken } from './tokens/PunctuationToken';
import type { RegexToken } from './tokens/RegexToken';
import type { StringToken } from './tokens/StringToken';
import type { WhitespaceToken } from './tokens/WhitespaceToken';
import type { LineTerminatorToken } from './tokens/LineTerminatorToken';
import type { BooleanToken } from './tokens/BooleanToken';
import type { NumericToken } from './tokens/NumericToken';
import type { NullToken } from './tokens/NullToken';
import type { UnknownToken } from './tokens/UnknownToken';

export type Token =
  | CommentToken
  | IdentifierToken
  | KeywordToken
  | PunctuationToken
  | RegexToken
  | StringToken
  | WhitespaceToken
  | UnknownToken
  | LineTerminatorToken
  | BooleanToken
  | NumericToken
  | NullToken;
