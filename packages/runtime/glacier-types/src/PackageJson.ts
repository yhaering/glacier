import type { LiteralUnion } from './LiteralUnion';
import type { JsonObject } from './JsonObject';

export type Dependency = Partial<Record<string, string>>;

/**
 Conditions which provide a way to resolve a package entry point based on the environment.
 */
export type ExportCondition = LiteralUnion<
  | 'import'
  | 'require'
  | 'node'
  | 'node-addons'
  | 'deno'
  | 'browser'
  | 'electron'
  | 'react-native'
  | 'default',
  string
>;

type ExportConditions = { [condition in ExportCondition]: Exports };

/**
 Entry points of a module, optionally with conditions and subpath exports.
 */
export type Exports =
  | null
  | string
  | Array<string | ExportConditions>
  | ExportConditions
  | { [path: string]: Exports };

/**
 Import map entries of a module, optionally with conditions.
 */
export type Imports = {
  // eslint-disable-line @typescript-eslint/consistent-indexed-object-style
  [key: `#${string}`]: string | { [key in ExportCondition]: Exports };
};

/**
 Type for [npm's `package.json` file](https://docs.npmjs.com/creating-a-package-json-file). Containing standard npm properties.
 */
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface PackageJsonStandard {
  /**
   The name of the package.
   */
  name?: string;

  /**
   Package version, parseable by [`node-semver`](https://github.com/npm/node-semver).
   */
  version?: string;

  /**
   Package description, listed in `npm search`.
   */
  description?: string;

  /**
   Keywords associated with package, listed in `npm search`.
   */
  keywords?: string[];

  /**
   The license for the package.
   */
  license?: string;

  /**
   The licenses for the package.
   */
  licenses?: Array<{
    type?: string;
    url?: string;
  }>;

  /**
   The files included in the package.
   */
  files?: string[];

  /**
   Resolution algorithm for importing ".js" files from the package's scope.

   [Read more.](https://nodejs.org/api/esm.html#esm_package_json_type_field)
   */
  type?: 'module' | 'commonjs';

  /**
   The module ID that is the primary entry point to the program.
   */
  main?: string;

  /**
   Subpath exports to define entry points of the package.

   [Read more.](https://nodejs.org/api/packages.html#subpath-exports)
   */
  exports?: Exports;

  /**
   Subpath imports to define internal package import maps that only apply to import specifiers from within the package itself.

   [Read more.](https://nodejs.org/api/packages.html#subpath-imports)
   */
  imports?: Imports;

  /**
   Is used to set configuration parameters used in package scripts that persist across upgrades.
   */
  config?: JsonObject;

  /**
   The dependencies of the package.
   */
  dependencies?: Dependency;

  /**
   Additional tooling dependencies that are not required for the package to work. Usually test, build, or documentation tooling.
   */
  devDependencies?: Dependency;

  /**
   Dependencies that are skipped if they fail to install.
   */
  optionalDependencies?: Dependency;

  /**
   Dependencies that will usually be required by the package user directly or via another dependency.
   */
  peerDependencies?: Dependency;

  /**
   Indicate peer dependencies that are optional.
   */
  peerDependenciesMeta?: Partial<Record<string, { optional: true }>>;

  /**
   Package names that are bundled when the package is published.
   */
  bundledDependencies?: string[];

  /**
   Alias of `bundledDependencies`.
   */
  bundleDependencies?: string[];

  /**
   If set to `true`, a warning will be shown if package is installed locally. Useful if the package is primarily a command-line application that should be installed globally.

   @deprecated
   */
  preferGlobal?: boolean;

  /**
   If set to `true`, then npm will refuse to publish it.
   */
  private?: boolean;
}

export type PackageJson = JsonObject & PackageJsonStandard;
