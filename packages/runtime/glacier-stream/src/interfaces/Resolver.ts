export type Resolver<I, O> = (input: I) => Promise<O>;
