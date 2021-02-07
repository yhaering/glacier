import { ResolverConfig } from '@glacier/resolver';
import { PipelineConfig } from '@glacier/pipeline/src/PipelineConfig';
import { BundlerConfig } from '@glacier/bundler/src/BundlerConfig';

/**
 * The GlacierConfig describes all configuration options
 * that can be used to customize the behaviour of the bundler
 */
export interface GlacierConfig {
  entries: string[];
  output: string;
  pipelines?: PipelineConfig[];
  resolver?: ResolverConfig;
  bundlers?: BundlerConfig[];
}
