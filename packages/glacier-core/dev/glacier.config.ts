import { GlacierConfig } from '../src/GlacierConfig';
import { TaskBabel } from '@glacier/task-babel';
import { TaskTypescript } from '@glacier/task-typescript';
import { ModuleKind, ScriptTarget } from 'typescript';
import { TaskSass } from '@glacier/task-sass';
import { TaskJavascript } from '@glacier/task-javascript';

export default <GlacierConfig>{
  entries: ['./index.js'],
  output: 'dist',
  pipelines: [
    {
      process: [/js$/],
      tasks: [
        new TaskBabel({
          sourceMaps: true,
          plugins: [['@babel/plugin-transform-modules-commonjs']],
        }),
        new TaskJavascript({ ecmaVersion: 'latest' }),
      ],
    },
    {
      process: [/ts$/],
      tasks: [
        new TaskTypescript({
          sourceMap: true,
          module: ModuleKind.ESNext,
          target: ScriptTarget.ESNext,
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          strict: true,
        }),
        new TaskBabel({
          sourceMaps: true,
          plugins: [['@babel/plugin-transform-modules-commonjs']],
        }),
        new TaskJavascript({ ecmaVersion: 'latest' }),
      ],
    },
    {
      process: [/scss$/],
      tasks: [new TaskSass({ sourceMap: true })],
    },
  ],
};
