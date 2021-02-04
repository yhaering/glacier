import { VirtualModule } from './VirtualModule';

export class RootModule extends VirtualModule {
  constructor(configPath: string) {
    super(null, Buffer.from(''), configPath);
  }
}
