
import add from './module1'

import {name,age} from './module2'

import {mul,count} from './module3'

import data from '../json/data.json'

import '../less/test1.less'
import '../less/test2.less'


/*eslint-disable*/
console.log(add(7, 7));
console.log(name, age);
console.log(mul(2, 3));
console.log(count(2, 1));

console.log(data)
/*eslint-enable*/