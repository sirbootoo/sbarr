**README.md**

# Sbarr

This repository contains utility functions for manipulating arrays of objects. It provides methods for finding objects by key-value pairs, determining the index of an object based on a key, and sorting arrays of objects by multiple properties.

## Installation

To use these utility functions in your project, you can install them via npm:

```bash
npm install sbarr
```

## Usage

### `findObjectByKey(array, key, value)`

This function finds an object within an array of objects by a specific key-value pair.

Parameters:
- `array`: The array of objects to search through.
- `key`: The key to search for.
- `value`: The value associated with the key.

Returns:
- Returns the first object found with the specified key-value pair. If no object is found, it returns `null`.

Example:

```javascript
const { findObjectByKey } = require('sbarr');

const array = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' }
];

const result = findObjectByKey(array, 'name', 'Alice');
console.log(result); // Output: { id: 2, name: 'Alice' }
```

### `parentIndexOfObjKey(array, attr)`

This function determines the index of the first object containing a specific attribute.

Parameters:
- `array`: The array of objects to search through.
- `attr`: The attribute to search for.

Returns:
- Returns the index of the first object containing the specified attribute.

Example:

```javascript
const { parentIndexOfObjKey } = require('sbarr');

const array = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' }
];

const result = parentIndexOfObjKey(array, 'name');
console.log(result); // Output: 0
```

### `sortByProperties(array, properties)`

This function sorts an array of objects by multiple properties.

Parameters:
- `array`: The array of objects to be sorted.
- `properties`: An array of strings representing the properties to sort by. Prefix a property with '-' to sort in descending order.

Returns:
- Returns the sorted array of objects.

Example:

```javascript
const { sortByProperties } = require('sbarr');

const array = [
    { name: 'John', date: '2023-05-15' },
    { name: 'Alice', date: '2022-10-20' },
    { name: 'Bob', date: '2024-01-08' }
];

const sortedArray = sortByProperties(array, ['name', '-date']);
console.log(sortedArray);
/* Output:
[
    { name: 'Alice', date: '2022-10-20' },
    { name: 'Bob', date: '2024-01-08' },
    { name: 'John', date: '2023-05-15' }
]
*/
```

To sort in ascending order, simply list the property without any prefix. To sort in descending order, prefix the property with '-'.