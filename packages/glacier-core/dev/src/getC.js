export default function getC() {
  const { getA } = require('./getA');
  const { getB } = require('./getB');
  getA();
  getB();
}