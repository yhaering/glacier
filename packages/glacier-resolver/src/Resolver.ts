import { ResolverConfig } from './ResolverConfig';
import { isRelative } from './functions/isRelative';
import { dirname, resolve } from 'path';
import { existsSync, readFileSync } from 'fs';
import { findFile } from './functions/findFile';
import { isFile } from './functions/isFile';
import { ResolveException } from './exeptions/ResolveException';
import { resolveAlias } from './functions/resolveAlias';

/**
 * The Resolver is a tool to resolve the absolut path of a file
 * given an import path.
 */
export class Resolver {
  /**
   * Contains the configuration object.
   * @private
   */
  private readonly config: Required<ResolverConfig>;

  /**
   * @constructor
   * @param config
   */
  constructor(config: ResolverConfig) {
    this.config = {
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      alias: {},
      mainFields: ['module', 'main', 'browser'],
      ...config,
    };
  }

  /**
   * Returns the absolut path of a module
   * @param sourcePath The path of the source file
   * @param modulePath The import path of the module
   */
  public resolve(sourcePath: string, modulePath: string): string {
    if (isRelative(modulePath)) {
      return this.resolveRelative(sourcePath, modulePath);
    }
    return this.resolveNative(sourcePath, modulePath);
  }

  /**
   * Returns the absolute path of a relative module import
   * @param sourcePath The path of the source file
   * @param modulePath The import path of the module
   * @private
   */
  private resolveRelative(sourcePath: string, modulePath: string): string {
    const absolutePath = resolve(dirname(sourcePath), modulePath);
    const resolvedFile = this.resolveModule(absolutePath);
    if (!resolvedFile) {
      throw new ResolveException(sourcePath, modulePath);
    }
    return resolvedFile;
  }

  private resolveModule(modulePath: string): string | undefined {
    if (existsSync(modulePath)) {
      if (isFile(modulePath)) {
        return modulePath;
      }
      modulePath = resolve(modulePath, './index');
    }
    return findFile(modulePath, this.config.extensions);
  }

  /**
   * Returns the absolute path of a native module import
   * @param sourcePath The path of the source file
   * @param modulePath The import path of the module
   * @private
   */
  private resolveNative(sourcePath: string, modulePath: string): string {
    const alias = resolveAlias(modulePath, this.config.alias);
    if (alias !== modulePath) {
      return this.resolve(sourcePath, alias);
    }
    const moduleParts = modulePath.split('/');
    const moduleName = moduleParts[0].startsWith('@')
      ? `${moduleParts.shift()}/${moduleParts.shift()}`
      : moduleParts.shift();

    try {
      const absoluteModulePath = dirname(require.resolve(`${moduleName}/package.json`, { paths: [sourcePath] }));
      if (moduleParts.length === 0) {
        const packageJson = JSON.parse(readFileSync(resolve(absoluteModulePath, 'package.json'), 'utf-8'));
        for (const field of this.config.mainFields) {
          if (packageJson[field]) {
            return resolve(absoluteModulePath, packageJson[field]);
          }
        }
        const defaultMain = resolve(absoluteModulePath, 'index.js');
        if (existsSync(defaultMain)) {
          return defaultMain;
        }
      } else {
        const deepPart = moduleParts.join('/');
        const absoluteFilePath = resolve(absoluteModulePath, deepPart);
        const resolvedFile = this.resolveModule(absoluteFilePath);
        if (resolvedFile) {
          return resolvedFile;
        }
      }
    } catch (e) {
      throw new ResolveException(sourcePath, modulePath);
    }
    throw new ResolveException(sourcePath, modulePath);
  }
}
