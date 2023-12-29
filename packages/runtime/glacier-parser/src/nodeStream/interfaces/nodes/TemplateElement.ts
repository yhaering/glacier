import type { BaseNode } from './BaseNode';

export interface TemplateElement extends BaseNode {
  type: 'TemplateElement';
  tail: boolean;
  value: {
    /** It is null when the template literal is tagged and the text has an invalid escape (e.g. - tag`\unicode and \u{55}`) */
    cooked?: string | null | undefined;
    raw: string;
  };
}
