export default (username, message) => {
    console.log("Hello");
    return username + message;
}

function test(username, message) { 
    return 'hello World';
}


// Arrow function
const arrowFunc = () => {
    console.log(arguments); // Error!
};

// Use rest parameters instead:
// const arrowFunc = (...args) => {
//     console.log(args);
// };


const square = x => x * x;
// or
// const square = (x) => x * x;

print(square);
console.log(square(5)); // 25
arrowFunc([''])
test("Davis", "hi");