const worker = startWorkerPool('./worker.js', 8);


(async () => {
  for (let i = 0; i < 50; i++) {
    worker.run('test', ':)').then(console.log);
  }
})();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function startWorkerPool(path, amount) {
  const workers = [];
  for (let i = 0; i < amount; i++) {
    workers.push(startWorker(path, i));
  }

  return {
    terminate: () => {
      return Promise.all(workers.map((worker) => worker.terminate()));
    },
    run: (name, data) => {
      const worker = workers[getRandomInt(amount)];
      return worker.run(name, data);
    }
  };
}

function startWorker(path, id) {
  const { Worker } = require('node:worker_threads');
  const { randomUUID } = require('node:crypto');
  const assert = require('node:assert');
  const worker = new Worker(path, { workerData: { id } });
  const jobs = new Map();

  worker.on('message', (value) => {
    const resolve = jobs.get(value.id);
    assert(resolve, `Expected a resolve function for job ${value.id}`);
    jobs.delete(value.id);
    resolve(value.returnValue);
  });

  return {
    terminate: () => {
      return worker.terminate();
    },
    run: async (name, data) => {
      return new Promise((resolve) => {
        const id = randomUUID();
        jobs.set(id, resolve);
        worker.postMessage({
          id,
          name,
          data
        });
      });
    }
  };
}
