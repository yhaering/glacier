export function assertValidImportSpecifier(specifier: string) {
  if (!specifier.startsWith('#')) {
    throw new Error('Specifier should start with #');
  }
  if (specifier === '#') {
    throw new Error('Specifier should not equal to #');
  }
  if (specifier.startsWith('#/')) {
    throw new Error(`Specifier ${specifier} should not start with #/`);
  }
}
