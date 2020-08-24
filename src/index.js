import './main.css';
import './main.scss';

import sum from './module1';

console.log('ready');

console.log(sum(1, 2));

function checkFiled(obj) {
  return obj?.credentials?.name;
}
console.log(checkFiled());
