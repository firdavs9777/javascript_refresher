let x;
x = 5 + Number('5');

x = Number(null);
x = Number(true);
x = Number(false);
x = 5 + true;
x = 5 + false;
console.log(x, typeof x);