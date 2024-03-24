const { findObjectByKey } = require('./index');
const { parentIndexOfObjKey } = require('./index');
const { sortByProperties } = require('./index');

const array = [
    { name: 'John', date: '2023-05-15' },
    { name: 'Alice', date: '2022-10-20' },
    { name: 'Bob', date: '2024-01-08' }
];

let result = findObjectByKey(array, 'name', 'Alice');
console.log(result);
result = parentIndexOfObjKey(array, 'name');
console.log(result); // Output: 0
const sortedArray = sortByProperties(array, ['-date', 'name']);
console.log(sortedArray);

// Sample array of objects with multiple properties
let arrayOfObjects = [
    { name: "John", age: 30, dateOfBirth: "1990-05-15", country: "USA", salary: 50000 },
    { name: "Alice", age: 25, dateOfBirth: "1995-10-20", country: "Canada", salary: 60000 },
    { name: "Bob", age: 35, dateOfBirth: "1985-01-08", country: "UK", salary: 55000 },
    { name: "Emma", age: 28, dateOfBirth: "1992-07-25", country: "Australia", salary: 52000 },
    { name: "Michael", age: 32, dateOfBirth: "1989-03-12", country: "Germany", salary: 65000 }
];
// Sorting by multiple properties
const sortedArrayOfObjects = sortByProperties(arrayOfObjects, ['country', '-salary', 'age']);
console.log(sortedArrayOfObjects);

