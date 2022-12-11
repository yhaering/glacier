import type { JsonPrimitive } from './JsonPrimitive';
import type { JsonObject } from './JsonObject';
import type { JsonArray } from './JsonArray';

export type JsonValue = JsonPrimitive | JsonObject | JsonArray;
