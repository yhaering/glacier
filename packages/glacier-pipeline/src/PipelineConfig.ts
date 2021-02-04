import { ModuleFilter } from '@glacier/module';
import { Task } from './Task';

export interface PipelineConfig extends ModuleFilter {
  tasks: Task<unknown>[];
}
