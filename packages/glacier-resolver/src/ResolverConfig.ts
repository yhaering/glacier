/**
 * The ResolveConfig object contains all possible configuration
 * options to customize the behavior of the Resolver
 */
export interface ResolverConfig {
  /**
   * A map of aliases to change the module that is resolved
   * by a specific path
   */
  alias?: Record<string, string>;

  /**
   * A list of extensions that should be tested if the
   * import path does not contain a file extension.
   */
  extensions?: string[];

  /**
   * The package.json key that is used to determine the
   * entry file of a package.
   */
  mainFields?: string[];
}
