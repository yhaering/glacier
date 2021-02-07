import { Task } from '@glacier/pipeline';
import { ResolvedModule, VirtualModule } from '@glacier/module';
import { renderSync, Options } from 'sass';

export class TaskSass extends Task<Options> {
  public async execute(module: ResolvedModule): Promise<void> {
    const code = module.getContent().toString();
    const result = renderSync({ ...this.config, data: code });
    module.setExtension('.css');
    module.setContent(Buffer.from(result.css));

    if (result.map) {
      const sourcemapPath = `${module.getPath()}.map`;
      this.importModule(module, new VirtualModule(module, result.map, sourcemapPath));
    }
  }
}
