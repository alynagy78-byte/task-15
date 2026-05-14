// 1- Multiply by 2
const numbers1 = [1, 2, 3, 4];
const doubled = numbers1.map(num => num * 2);
console.log("1- Doubled Numbers:", doubled);

// 2- Even numbers only
const numbers2 = [1, 2, 3, 4, 5, 6];
const evens = numbers2.filter(num => num % 2 === 0);
console.log("2- Even Numbers:", evens);

// 3- Fruit counter
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log("3- Fruit Count:", fruitCount);

// 4- First word > 5 chars
const words = ["hi", "cat", "elephant", "dog"];
const firstLongWord = words.find(word => word.length > 5);
console.log("4- First word > 5 chars:", firstLongWord);

// 5- Check for failed students
const grades = [90, 70, 40, 88];
const hasFailed = grades.some(grade => grade < 50);
console.log("5- Is there any failed student?", hasFailed);

// 6- Total price for in-stock products
const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Mouse", price: 50, inStock: true }
];

const totalInStock = products
    .filter(product => product.inStock)
    .reduce((total, product) => total + product.price, 0);

console.log("6- Total price of in-stock products:", totalInStock);