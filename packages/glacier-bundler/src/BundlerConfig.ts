import { ModuleFilter } from '@glacier/module';
import { BundlerTask } from './BundlerTask';

export interface BundlerConfig extends ModuleFilter {
  bundler: BundlerTask;
}
