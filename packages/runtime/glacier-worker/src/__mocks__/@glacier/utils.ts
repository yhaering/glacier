export const createControlledPromise = jest.fn().mockResolvedValue({
  promise: '{{PROMISE}}',
  reject: '{{REJECT}}',
  resolve: '{{RESOLVE}}'
});

export const createRoundRobin = jest
  .fn()
  .mockImplementation((items) => jest.fn().mockReturnValue(items[0]));
