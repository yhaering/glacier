import { GlacierConfig } from '../src/GlacierConfig';
import { ResolvedModule, RootModule, VirtualModule } from '@glacier/module';
import { Task } from '@glacier/pipeline';

class TestTask extends Task<void> {
  public async execute(module: ResolvedModule) {
    const issuers = module.getIssuers();
    if (issuers[0] instanceof RootModule) {
      module.setContent(Buffer.from('export const test = 1234;'));
      return [new VirtualModule(module, Buffer.from('1234'), 'test.js')];
    }
  }
}

export default <GlacierConfig>{
  entries: ['./src/index.js'],
  output: 'dist',
  pipelines: [{ process: [/js$/], tasks: [new TestTask()] }],
};
