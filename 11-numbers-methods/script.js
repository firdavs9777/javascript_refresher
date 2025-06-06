let x;
const num = new Number(50);

// Convert the number to a string
x = num.toString();
// Output: '50', Type: string
console.log(x, typeof x); // '50' string

// Get the length of the string representation of the number
x = num.toString().length;
// Output: 2, Type: number (because the length of the string '50' is 2)
console.log(x, typeof x); // 2 number

// Format the number to 2 decimal places
x = num.toFixed(2);
// Output: '50.00', Type: string
console.log(x, typeof x); // '50.00' string

// Format the number to a precision of 2 significant digits
x = num.toPrecision(2);
// Output: '50', Type: string (since 50 has 2 significant digits)
console.log(x, typeof x); // '50' string

// Get the primitive value of the Number object
x = num.valueOf();
// Output: 50, Type: number (returns the primitive number value)
console.log(x, typeof x); // 50 number
