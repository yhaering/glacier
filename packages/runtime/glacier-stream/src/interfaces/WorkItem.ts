export interface WorkItem<I, O> {
  input: I;
  resolve: (output: O) => void;
}
