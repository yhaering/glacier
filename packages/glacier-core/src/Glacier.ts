import { GlacierConfig } from './GlacierConfig';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { dirname, relative, resolve } from 'path';
import assert from 'assert';
import { Resolver } from '@glacier/resolver';
import { Module, ResolvedModule, RootModule } from '@glacier/module';
import { Pipeline } from '@glacier/pipeline';
import { getRootPath } from './functions/getRootPath';

export class Glacier {
  /**
   * Contains the complete config object.
   * @private
   */
  private readonly config: GlacierConfig;

  /**
   * The path to the glacier config
   * @private
   */
  private readonly configPath: string;

  /**
   * @constructor
   * @param configPath The path to a glacier config
   */
  constructor(configPath: string) {
    this.configPath = resolve(configPath);
    this.config = this.loadConfig(this.configPath);
  }

  /**
   * Imports the config at the given location
   * @param configPath
   * @private
   */
  private loadConfig(configPath: string): GlacierConfig {
    assert(existsSync(configPath), `Could not find config file at '${configPath}'`);
    const config = require(configPath);
    return config.default;
  }

  /**
   * Starts the bundling process
   */
  public async bundle(): Promise<void> {
    const resolver = new Resolver(this.config.resolver || {});
    const rootModule = new RootModule(this.configPath);
    const modules = this.config.entries.map((entry) => new Module(rootModule, entry));
    const pipeline = new Pipeline(this.config.pipelines || [], resolver);
    const processedModule = await pipeline.process(modules);
    this.cleanupOutput();
    this.persist(processedModule);
  }

  private cleanupOutput() {
    const absoluteOutput = resolve(process.cwd(), this.config.output);
    if (existsSync(absoluteOutput)) {
      rmSync(absoluteOutput, { recursive: true, force: true });
    }
  }

  private persist(modules: ResolvedModule[]) {
    const rootPath = getRootPath(modules);
    for (const module of modules) {
      const modulePath = module.getSourcePath();
      const relativePath = relative(rootPath, modulePath);
      const targetPath = resolve(this.config.output, relativePath);
      const targetDirectoryPath = dirname(targetPath);

      if (!existsSync(targetDirectoryPath)) {
        mkdirSync(targetDirectoryPath, { recursive: true });
      }
      writeFileSync(targetPath, module.getContent());
    }
  }
}
