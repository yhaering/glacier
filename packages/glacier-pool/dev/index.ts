import { GlacierPool } from '../src/GlacierPool';

const pool = new GlacierPool({ worker: 5 });

console.time('time');
Promise.all([
  pool.execute('./tasks/testTask', [1]),
  pool.execute('./tasks/testTask', [2]),
  pool.execute('./tasks/testTask', [3]),
  pool.execute('./tasks/testTask', [4]),
  pool.execute('./tasks/testTask', [5]),
]).then((result) => {
  console.log(result);
  console.timeEnd('time');
  pool.shutdown();
});

const queue = [];
