import { GlacierConfig } from '../src/GlacierConfig';
import { ResolvedModule, VirtualModule } from '@glacier/module';
import { Task } from '@glacier/pipeline';

class TestTask extends Task<void> {
  public async execute(module: ResolvedModule) {
    module.setContent(Buffer.from('export const test = 1234;'));
    return [new VirtualModule(module, Buffer.from(''), module.getSourcePath().replace('.js', '.css'))];
  }
}

export default <GlacierConfig>{
  entries: ['./src/test.js', './index.js', './src/sub/test2.js'],
  output: 'dist',
  pipelines: [{ process: [/js$/], tasks: [new TestTask()] }],
};
