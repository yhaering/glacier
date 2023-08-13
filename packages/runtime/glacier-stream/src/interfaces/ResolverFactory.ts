import type { Resolver } from './Resolver';
import type { Terminator } from './Terminator';

export type ResolverFactory<I, O> = () => {
  resolver: Resolver<I, O>;
  terminate: Terminator;
};
