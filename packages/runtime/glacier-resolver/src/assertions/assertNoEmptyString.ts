export function assertNoEmptyString(str: string) {
  if (str === '') {
    throw new Error('Expected string to not be empty');
  }
}
