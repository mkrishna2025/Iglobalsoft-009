var Addition = require('./addition.js');
var Calculator1 = require('./calculator1.js');
var { sub, mul } = require('./calculator1.js');
var Calculator2 = require('./calculator2.js');
var { add } = require('./calculator2.js');
var Person = require('./person.js');
var Son = require('./son.js');

console.log('Welcome to Demo');
console.log('Add of 2 & 4 is ' + Addition(2, 4));
console.log('Add of 2 & 4 is ' + Calculator1.add(2, 4));
console.log('Sub of 2 & 4 is ' + Calculator1.sub(2, 4));
console.log('Sub of 2 & 4 is ' + sub(2, 4));
console.log('Add of 2 & 4 is ' + Calculator2.add(2, 4));
console.log('Add of 2 & 4 is ' + add(2, 4));

var karthik = new Person();
karthik.setName('Karthik Reddy');
console.log(karthik.getName());

var s = new Son();
console.log('Welcome to Demo, ' + s.getName() + ', ' + s.getGender() + ', ' + s.getCity());