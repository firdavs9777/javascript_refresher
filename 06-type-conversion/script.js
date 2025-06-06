let amount = 100;

// Change string to number
amount = parseInt(amount); // it will change string to integer
amount = +amount;
amount = Number(amount);

// Change number to string 
amount = amount.toString();

let test_boolean = 0;

// Change number to boolean
test_boolean = Boolean(test_boolean);
console.log(test_boolean, typeof test_boolean)
console.log(amount, typeof amount);