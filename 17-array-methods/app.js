const hobbies = ["test", "test2", "Sports"];

const index  = hobbies.findIndex((item) => {
    return item === "Sports"
})
console.log(hobbies);
console.log(index);


// ===== ARRAY DESTRUCTURING =====

// 1. Basic array destructuring
const colors = ['red', 'green', 'blue', 'yellow'];
const [first, second, third] = colors;
console.log('Basic array destructuring:');
console.log(`First: ${first}, Second: ${second}, Third: ${third}`);

// 2. Skipping elements
const [primary, , tertiary] = colors;
console.log('\nSkipping elements:');
console.log(`Primary: ${primary}, Tertiary: ${tertiary}`);

// 3. Default values
const [t, b, c, d, e = 'orange'] = colors;
console.log('\nWith default values:');
console.log(`Fifth color: ${e}`);

// 4. Rest operator
const [firstColor, ...remainingColors] = colors;
console.log('\nUsing rest operator:');
console.log(`First: ${firstColor}`);
console.log(`Remaining:`, remainingColors);

// 5. Swapping variables
let x = 10;
let y = 20;
console.log(`\nBefore swap: x=${x}, y=${y}`);
[x, y] = [y, x];
console.log(`After swap: x=${x}, y=${y}`);

// ===== OBJECT DESTRUCTURING =====

// Sample data
const student = {
    name: 'Kim Min-jun',
    age: 22,
    major: 'Computer Science',
    university: 'Seoul National University',
    grades: {
        math: 95,
        programming: 98,
        english: 87
    },
    hobbies: ['gaming', 'reading', 'coding']
};

// 6. Basic object destructuring
const { name, age, major } = student;
console.log('\n===== OBJECT DESTRUCTURING =====');
console.log('Basic object destructuring:');
console.log(`Name: ${name}, Age: ${age}, Major: ${major}`);

// 7. Renaming variables
const { name: studentName, university: school } = student;
console.log('\nRenaming variables:');
console.log(`Student: ${studentName} from ${school}`);

// 8. Default values
const { name: fullName, gpa = 3.8, scholarship = false } = student;
console.log('\nWith default values:');
console.log(`${fullName} - GPA: ${gpa}, Scholarship: ${scholarship}`);

// 9. Nested destructuring
const { grades: { math, programming }, hobbies: [firstHobby] } = student;
console.log('\nNested destructuring:');
console.log(`Math: ${math}, Programming: ${programming}, First hobby: ${firstHobby}`);

// 10. Rest operator with objects
const { name: n, age: a, ...otherInfo } = student;
console.log('\nRest operator with objects:');
console.log('Other info:', otherInfo);

// ===== FUNCTION PARAMETER DESTRUCTURING =====

// 11. Function with destructured parameters
function displayStudent({ name, age, major = 'Undeclared' }) {
    return `${name} (${age}) is studying ${major}`;
}

function calculateGPA({ grades: { math, programming, english } }) {
    return ((math + programming + english) / 3).toFixed(2);
}

console.log('\n===== FUNCTION DESTRUCTURING =====');
console.log(displayStudent(student));
console.log(`GPA: ${calculateGPA(student)}`);

// 12. Array function parameters
function processCoordinates([x, y, z = 0]) {
    return `Point at (${x}, ${y}, ${z})`;
}

const coordinates = [10, 20];
console.log('\nArray function parameters:');
console.log(processCoordinates(coordinates));

// ===== PRACTICAL EXAMPLES =====

// 13. API response handling
const apiResponse = {
    data: {
        users: [
            { id: 1, name: 'Alice', email: 'alice@email.com' },
            { id: 2, name: 'Bob', email: 'bob@email.com' }
        ]
    },
    status: 200,
    message: 'Success'
};

const { 
    data: { users }, 
    status, 
    message 
} = apiResponse;

console.log('\n===== PRACTICAL EXAMPLES =====');
console.log('API Response:');
console.log(`Status: ${status} - ${message}`);
console.log('Users:', users.map(({ name, email }) => `${name} (${email})`));

// 14. Loop with destructuring
console.log('\nLoop with destructuring:');
const people = [
    ['John', 25, 'Engineer'],
    ['Sarah', 30, 'Designer'],
    ['Mike', 28, 'Manager']
];

people.forEach(([name, age, job]) => {
    console.log(`${name} is ${age} years old and works as a ${job}`);
});

// 15. Multiple return values
function getStats() {
    return {
        min: 10,
        max: 100,
        average: 55,
        count: 20
    };
}

const { min, max, average } = getStats();
console.log('\nMultiple return values:');
console.log(`Range: ${min}-${max}, Average: ${average}`);

// 16. Combined array and object destructuring
const course = {
    title: 'JavaScript Fundamentals',
    instructor: 'Dr. Lee',
    students: [
        { name: 'Park Ji-hoon', score: 92 },
        { name: 'Lee So-young', score: 88 },
        { name: 'Kim Tae-ho', score: 95 }
    ]
};

const {
    title,
    instructor,
    students: [topStudent, ...otherStudents]
} = course;

console.log('\nCombined destructuring:');
console.log(`Course: ${title} by ${instructor}`);
console.log(`Top student: ${topStudent.name} (${topStudent.score})`);
console.log(`Other students: ${otherStudents.length}`);

console.log('\n===== SUMMARY =====');
console.log('Destructuring helps you:');
console.log('• Extract values cleanly from arrays and objects');
console.log('• Set default values');
console.log('• Rename variables');
console.log('• Handle function parameters elegantly');
console.log('• Work with nested data structures');
console.log('• Make your code more readable and concise');

const {name: userName, age_user: userAge} = {
    name: "Johnson",
    age_user: 22
}
console.log(userName, userAge)


// ===== SPREAD OPERATOR (...) =====
// The spread operator allows you to expand arrays, objects, or strings

console.log('===== ARRAY SPREAD OPERATOR =====');

// 1. Basic array spreading
const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'broccoli', 'spinach'];

// Combining arrays
const food = [...fruits, ...vegetables];
console.log('Combined arrays:', food);

// Adding elements while spreading
const moreFruits = ['mango', ...fruits, 'grape'];
console.log('Adding elements:', moreFruits);

// 2. Copying arrays (shallow copy)
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];
console.log('\nOriginal array:', originalArray);
console.log('Copied array:', copiedArray);

// Modify copied array to show they're independent
copiedArray.push(6);
console.log('After modifying copy:');
console.log('Original:', originalArray);
console.log('Copy:', copiedArray);

// 3. Converting string to array
const greeting = 'Hello';
const letters = [...greeting];
console.log('\nString to array:', letters);

// 4. Finding min/max in arrays
const numbers = [15, 3, 8, 42, 1, 23];
const maxNumber = Math.max(...numbers);
const minNumber = Math.min(...numbers);
console.log('\nNumbers:', numbers);
console.log('Max:', maxNumber);
console.log('Min:', minNumber);

// 5. Function arguments
function sum(a, b, c) {
    return a + b + c;
}

const nums = [10, 20, 30];
console.log('\nFunction with spread:', sum(...nums));
console.log([...nums.map((item => item + 22))]  + 12)
// Variable number of arguments
function multiplyAll(...args) {
    return args.reduce((acc, num) => acc * num, 1);
}

console.log('Multiply all:', multiplyAll(2, 3, 4, 5));

console.log('\n===== OBJECT SPREAD OPERATOR =====');

// 6. Basic object spreading
const person = {
    name: 'Kim Soo-jin',
    age: 28,
    city: 'Seoul'
};

const job = {
    title: 'Software Developer',
    company: 'Tech Corp',
    salary: 60000
};

// Combining objects
const employee = { ...person, ...job };
console.log('Combined object:', employee);

// 7. Copying objects (shallow copy)
const originalPerson = {
    name: 'Lee Min-ho',
    age: 25,
    hobbies: ['reading', 'gaming']
};

const copiedPerson = { ...originalPerson };
console.log('\nOriginal person:', originalPerson);
console.log('Copied person:', copiedPerson);

// 8. Overriding properties
const student_name = {
    name: 'Park Ji-won',
    grade: 'A',
    subject: 'Math'
};

const updatedStudent = {
    ...student_name,
    grade: 'A+',
    semester: 'Fall 2024'
};

console.log('\nOriginal student:', student);
console.log('Updated student:', updatedStudent);

// 9. Nested objects (shallow copy limitation)
const userProfile = {
    name: 'Alice',
    preferences: {
        theme: 'dark',
        language: 'en'
    }
};

const newProfile = { ...userProfile };
newProfile.preferences.theme = 'light'; // This affects original!

console.log('\nShallow copy limitation:');
console.log('Original preferences:', userProfile.preferences);
console.log('New profile preferences:', newProfile.preferences);

// Deep copy alternative
const deepCopyProfile = {
    ...userProfile,
    preferences: { ...userProfile.preferences }
};

deepCopyProfile.preferences.language = 'ko';
console.log('\nAfter deep copy:');
console.log('Original:', userProfile.preferences);
console.log('Deep copy:', deepCopyProfile.preferences);

console.log('\n===== PRACTICAL EXAMPLES =====');

// 10. Adding items to arrays immutably
const shoppingCart = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse', price: 25 }
];

const newItem = { id: 3, name: 'Keyboard', price: 80 };
const updatedCart = [...shoppingCart, newItem];

console.log('Shopping cart examples:');
console.log('Original cart:', shoppingCart);
console.log('Updated cart:', updatedCart);

// 11. Removing items from arrays
const removeItemById = (arr, id) => arr.filter(item => item.id !== id);
const cartWithoutMouse = removeItemById(shoppingCart, 2);
console.log('Cart without mouse:', cartWithoutMouse);

// 12. Updating array items immutably
const updateItemPrice = (arr, id, newPrice) => {
    return arr.map(item => 
        item.id === id ? { ...item, price: newPrice } : item
    );
};

const cartWithUpdatedPrice = updateItemPrice(shoppingCart, 1, 1100);
console.log('Cart with updated laptop price:', cartWithUpdatedPrice);

// 13. Form data handling
const formData = {
    username: 'user123',
    email: 'user@example.com'
};

const handleFormUpdate = (currentData, field, value) => {
    return {
        ...currentData,
        [field]: value
    };
};

const updatedFormData = handleFormUpdate(formData, 'email', 'newemail@example.com');
console.log('\nForm data update:');
console.log('Original:', formData);
console.log('Updated:', updatedFormData);

// 14. API response merging
const defaultSettings = {
    theme: 'light',
    notifications: true,
    language: 'en',
    autoSave: true
};

const userSettings = {
    theme: 'dark',
    language: 'ko'
};

const finalSettings = { ...defaultSettings, ...userSettings };
console.log('\nSettings merging:');
console.log('Default:', defaultSettings);
console.log('User:', userSettings);
console.log('Final:', finalSettings);

// 15. Array manipulation utilities
const arrayUtils = {
    // Add to beginning
    prepend: (arr, ...items) => [...items, ...arr],
    
    // Add to end
    append: (arr, ...items) => [...arr, ...items],
    
    // Insert at index
    insertAt: (arr, index, ...items) => [
        ...arr.slice(0, index),
        ...items,
        ...arr.slice(index)
    ],
    
    // Remove duplicates
    unique: (arr) => [...new Set(arr)]
};

const testArray = [1, 2, 3, 4, 5];
console.log('\nArray utilities:');
console.log('Original:', testArray);
console.log('Prepend 0:', arrayUtils.prepend(testArray, 0));
console.log('Append 6,7:', arrayUtils.append(testArray, 6, 7));
console.log('Insert at index 2:', arrayUtils.insertAt(testArray, 2, 2.5));

const duplicates = [1, 2, 2, 3, 3, 3, 4];
console.log('Remove duplicates:', arrayUtils.unique(duplicates));

// 16. React-style state updates (simulation)
const useState = (initialState) => {
    let state = initialState;
    const setState = (newState) => {
        if (typeof newState === 'function') {
            state = newState(state);
        } else if (typeof newState === 'object' && newState !== null) {
            state = { ...state, ...newState };
        } else {
            state = newState;
        }
        console.log('State updated:', state);
        return state;
    };
    return [() => state, setState];
};

console.log('\nReact-style state updates:');
const [getState, setState] = useState({ count: 0, name: 'Counter' });

setState({ count: 1 }); // Partial update
setState(prevState => ({ ...prevState, count: prevState.count + 1 })); // Functional update

// 17. Conditional spreading
const baseConfig = {
    apiUrl: 'https://api.example.com',
    timeout: 5000
};

const isDevelopment = true;
const config = {
    ...baseConfig,
    ...(isDevelopment && { 
        debug: true, 
        apiUrl: 'https://dev-api.example.com' 
    })
};

console.log('\nConditional spreading:', config);

console.log('\n===== SPREAD vs REST =====');
console.log('SPREAD: Expands/spreads elements');
console.log('REST: Collects/gathers elements');

// REST (collects remaining elements)
const [first_test, second_test, ...rest] = [1, 2, 3, 4, 5];
console.log('REST in destructuring:', { first_test, second_test, rest });

// SPREAD (expands elements)
const expanded = [0, ...[1, 2, 3], 4];
console.log('SPREAD in array:', expanded);

function restExample(a, b, ...others) {
    console.log('REST in function:', { a, b, others });
}

restExample(1, 2, 3, 4, 5);

console.log('\n===== BEST PRACTICES =====');
console.log('✅ Use spread for immutable updates');
console.log('✅ Combine arrays and objects cleanly');
console.log('✅ Copy arrays/objects (shallow copy)');
console.log('✅ Pass array elements as function arguments');
console.log('⚠️  Remember: shallow copy only for nested objects');
console.log('⚠️  Consider performance with large arrays/objects');
console.log('⚠️  Use proper deep copy for nested structures');