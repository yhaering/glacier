const { workerData } = require('node:worker_threads');

createWorker({
  test: async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${workerData.id} World ${data}`);
      }, 1000);
    });
  }
});

function createWorker(worker) {
  const { parentPort } = require('node:worker_threads');
  const assert = require('node:assert');
  assert(parentPort, 'Expected script to run as a worker');
  parentPort.on('message', async (value) => {
    assert(value.name, 'Expected message to have a property called name.');
    const fnc = worker[value.name];
    assert(fnc, `Expected function ${value.name} to exist.`);
    const returnValue = await fnc(value.data);
    parentPort.postMessage({ ...value, returnValue });
  });
}
