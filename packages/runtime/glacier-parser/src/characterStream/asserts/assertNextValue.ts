export function assertNextValue(value?: string): asserts value is string {
  if (value === undefined) {
    throw new Error('Reached end of stream');
  }
}
