let x;

const name = 'Firdavs';
const age = 27;

// Concatenation using + operator
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';
// Output: 'Hello, my name is Firdavs and I am 27 years old'

console.log(x);

// Template literals for string interpolation
x = `Hello, my name is ${name} and I am ${age} years old`;
// Output: 'Hello, my name is Firdavs and I am 27 years old'

console.log(x);

const s = new String('Hello World~');

// String Properties and Methods

// Get the length of the string
x = s.length;
// Output: 12

console.log(x);

// Access value by index (key)
x = s[1];
// Output: 'e'

console.log(x);

// Convert string to uppercase
x = s.toUpperCase();
// Output: 'HELLO WORLD~'

console.log(x);

// Convert string to lowercase
x = s.toLowerCase();
// Output: 'hello world~'

console.log(x);

// Get the character at a specific position
x = s.charAt(0);
// Output: 'H'

console.log(x);

// Get the index of a specific character
x = s.indexOf('W');
// Output: 6

console.log(x);

// Get a substring from index 0 to 5 (not including 5)
x = s.substring(0, 5);
// Output: 'Hello'

console.log(x);

// Get a substring from index 7 to the end
x = s.substring(7);
// Output: 'orld~'

console.log(x);

// Get a slice of the string from index 0 to 5 (not including 5)
x = s.slice(0, 5);
// Output: 'Hello'

console.log(x);

// Get a slice of the string starting from -11th index (counting from the end)
x = s.slice(-11);
// Output: 'ello World~'

console.log(x);

// Remove leading and trailing spaces from a string
const l = '   test';
x = l.trim();
// Output: 'test'

console.log(x);

// Replace a substring within the string
x = s.replace('World', 'John');
// Output: 'Hello John~'

console.log(x);

// Check if the string contains a specific substring
x = s.includes('Hello');
// Output: true

console.log(x);

// Split the string into an array based on spaces
x = s.split(' ');
// Output: ['Hello', 'World~']

console.log(x);
