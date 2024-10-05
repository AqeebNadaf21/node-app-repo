console.log(`========================= 10 =========================`);
//  10. How to get a subset of a javascript object’s properties? 
var person = {
  firsName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
  country: 'USA'
};
var {firstName, lastName} = person;
console.log(firstName, lastName);


console.log(`========================= 11.1 =========================`);
// 11. How to convert an Object {} to an Array [] of key-value pairs in JavaScript? 
// i) Using Object.entries() 
const obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};
const entries = Object.entries(obj);
console.log(entries);


console.log(`========================= 11.2 =========================`);
// 11. How to convert an Object {} to an Array [] of key-value pairs in JavaScript?
// ii) Using Object.keys()
const obj2 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};

const entry = Object.keys(obj).map(key => obj[key]);
console.log( entry );


console.log(`========================= 12 =========================`);
// 12. How to check if a value is object-like in JavaScript?    
function isObjLike(value) {
    return typeof value === 'object' && value !== null; 
}
console.log(isObjLike({}));
console.log(isObjLike([]));
console.log(isObjLike(null));
console.log(isObjLike(42));
console.log(isObjLike('string'));


console.log(`========================= 13 =========================`);
// 13. How to use a variable for a key in a JavaScript object literal?  
let key = 'name';
let value = 'John Doe';

let object = {
    [key]: value
};
console.log(object);




