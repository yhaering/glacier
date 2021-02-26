import { ResolvedModule } from './ResolvedModule';

export class ImportedModule {
  private readonly module: ResolvedModule;
  private readonly importPath: string;
  private readonly async: boolean;

  constructor(module: ResolvedModule, importPath: string, async = false) {
    this.module = module;
    this.importPath = importPath;
    this.async = async;
  }

  public getModule(): ResolvedModule {
    return this.module;
  }

  public getImportPath(): string {
    return this.importPath;
  }

  public isAsync(): boolean {
    return this.async;
  }
}
