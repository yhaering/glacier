import { GlacierConfig } from '../src/GlacierConfig';
import { TaskBabel } from '@glacier/task-babel';
import { TaskTypescript } from '@glacier/task-typescript';
import { ModuleKind, ScriptTarget } from 'typescript';
import { TaskSass } from '@glacier/task-sass';

export default <GlacierConfig>{
  entries: ['./index.js'],
  output: 'dist',
  pipelines: [
    {
      process: [/js$/],
      tasks: [new TaskBabel({ sourceMaps: true })],
    },{
      process: [/ts$/],
      tasks: [new TaskTypescript({ sourceMap: true, module: ModuleKind.ESNext, target: ScriptTarget.ESNext })],
    },{
      process: [/scss$/],
      tasks: [new TaskSass({ sourceMap: true })],
    },
  ],
};
