import { GlacierConfig } from '../src/GlacierConfig';
import { TaskBabel } from '@glacier/task-babel';
import { TaskTypescript } from '@glacier/task-typescript';
import { ModuleKind, ScriptTarget } from 'typescript';
import { TaskSass } from '@glacier/task-sass';
import { TaskJavascript } from '@glacier/task-javascript';
import { BundlerJavascript } from '@glacier/bundler-javascript';

export default <GlacierConfig>{
  entries: ['./index.js'],
  output: 'dist',
  bundlers: [
    {
      process: [/js$/],
      bundler: new BundlerJavascript(),
    },
  ],
  pipelines: [
    {
      process: [/js$/],
      tasks: [
        new TaskBabel({
          sourceMaps: true,
          plugins: [['@babel/plugin-transform-modules-commonjs', { loose: true, strict: true }]],
        }),
        new TaskJavascript({ ecmaVersion: 'latest' }),
      ],
    },
    {
      process: [/ts$/],
      tasks: [
        new TaskTypescript({
          sourceMap: true,
          module: ModuleKind.CommonJS,
          target: ScriptTarget.ESNext,
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
