export function isPrivateMapping(specifier: string): boolean {
  return specifier.startsWith('#');
}
