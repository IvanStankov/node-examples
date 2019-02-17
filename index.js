const Person = require('./person');
//import Person from './person'; ES6 modules do not work yet (without babel or etc.)

const person1 = new Person("John Doe", 34)

person1.greeting();
