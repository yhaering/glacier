import { getB } from './src/getB';



getB();


window.load = function() {
  console.log('LOAD ASYNC');
  const { getA } = import('./src/getA');
  getA();
};
