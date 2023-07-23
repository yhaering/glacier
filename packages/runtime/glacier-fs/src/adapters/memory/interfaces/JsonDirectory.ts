import type { JsonFile } from './JsonFile';

export type JsonDirectory = { [key: string]: JsonDirectory | JsonFile };
