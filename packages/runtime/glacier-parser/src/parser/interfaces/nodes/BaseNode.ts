import type { BaseNodeWithoutComments } from './BaseNodeWithoutComments';

import type { Comment } from './Comment';

export interface BaseNode extends BaseNodeWithoutComments {
  leadingComments?: Comment[] | undefined;
  trailingComments?: Comment[] | undefined;
}
