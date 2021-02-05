import { ResolvedModule } from '@glacier/module';
import { sep, dirname } from 'path';

export function getRootPath(modules: ResolvedModule[]): string {
  return dirname(
    modules
      .reduce((shortestModule, nextModule) => {
        const shortestModuleLength = shortestModule.getSourcePath().split(sep).length;
        const nextModuleLength = nextModule.getSourcePath().split(sep).length;
        return nextModuleLength < shortestModuleLength ? nextModule : shortestModule;
      }, modules[0])
      .getSourcePath(),
  );
}
