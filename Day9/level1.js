//ques1
//foreach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => {
    console.log(number * 2);
});

//map
const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map(number => number * 2);
console.log(doubled); 

//filter
const numbers2 = [1, 2, 3, 4, 5];
const odd = numbers2.filter(number => number % 2 != 0);
console.log(odd);

//reduce
const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, number) => acc + number, 0);
console.log(sum);


//ques2
// callback with foreach
function logDouble(number) {
    console.log(number * 2);
}
const numbers4 = [1, 2, 3, 4, 5];
numbers4.forEach(logDouble);

//callback with map
function double(number) {
    return number * 2;
}
    const numbers5 = [1, 2, 3, 4, 5];
const doubledd = numbers5.map(double);
console.log(doubledd);

//callback with filter
function isEven(number) {
    return number % 2 === 0;
}
const numbers6 = [1, 2, 3, 4, 5];
const evenNumbers = numbers6.filter(isEven);
console.log(evenNumbers);

//callback with reduce
function sum1(accumulator, currentValue) {
    return accumulator + currentValue;
}

const numbers7 = [1, 2, 3, 4, 5];
const totalSum = numbers7.reduce(sum1, 0);
console.log(totalSum);

//ques3
const countries = ["USA", "Canada", "Germany", "France", "Japan"];
function logCountry(country) {
    console.log(country);
}
countries.forEach(logCountry);

//ques4
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
function logName(name) {
    console.log(name);
}
names.forEach(logName);

//ques5
const numbers8 = [1, 2, 3, 4, 5];
function logNumber(number) {
    console.log(number);
}
numbers8.forEach(logNumber);

//ques6
const countries1 = ["USA", "Canada", "Germany", "France", "Japan"];
function toUpperCase(country) {
    return country.toUpperCase();
}
const upperCaseCountries = countries.map(toUpperCase);

console.log(upperCaseCountries);

//ques7
const countries3 = ["USA", "Canada", "Germany", "France", "Japan"];

const countriesLength = countries3.map(country => country.length);

console.log(countriesLength); 

//ques8
const numbers10 = [1, 2, 3, 4, 5];

const squaredNumbers = numbers10.map(number => number * number);

console.log(squaredNumbers);

//ques9
const names4 = ["Alice", "Bob", "Charlie", "David", "Eve"];

const upperCaseNames = names4.map(name => name.toUpperCase());

console.log(upperCaseNames);

//ques10
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 }
];

const productPrices = products.map(product => product.price);

console.log(productPrices);

//ques11
const countries4 = ["Finland", "Iceland", "Thailand", "Switzerland", "Canada"];

const countriesWithLand = countries4.filter(country => country.includes("land"));

console.log(countriesWithLand);

//ques12
const countries5 = ["USA", "Canada", "Germany", "France", "Japan"];

const sixCharCountries = countries5.filter(country => country.length === 6);

console.log(sixCharCountries);

//ques13
const countries6 = ["USA", "Canada", "Germany", "France", "Japan"];

const sixLettersOrMore = countries6.filter(country => country.length >= 6);

console.log(sixLettersOrMore);

//ques14
const countries7 = ["Ethiopia", "Egypt", "Canada", "Germany", "France"];

const countriesStartingWithE = countries7.filter(country => country.startsWith('E'));

console.log(countriesStartingWithE);

//ques15
const products1 = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 },
    { name: 'Monitor', price: null },
    { name: 'Keyboard', price: undefined }
];

const validPrices = products1.filter(product => product.price !== null && product.price !== undefined);

console.log(validPrices); 

//ques16
function getStringLists(arr) {
    return arr.filter(item => typeof item === 'string');
}

const mixedArray = [1, 'apple', true, 'banana', 42, 'cherry'];
const stringArray = getStringLists(mixedArray);
console.log(stringArray);

//ques17
const numbers11 = [1, 2, 3, 4, 5];

const sum2 = numbers11.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum2);

//ques18
const countries67 = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "Iceland"];

const sentence = countries67.reduce((acc, country, index) => {
    if (index === countries67.length - 1) {
        return `${acc}, and ${country} are north European countries`;
    } else if (index === 0) {
        return country;
    } else {
        return `${acc}, ${country}`;
    }
}, "");

//ques20
const names0 = ["Alice", "Bob", "Charlie", "David", "Eve"];

const hasLongNames = names0.some(name => name.length > 7);

console.log(hasLongNames);
console.log(sentence);

//ques21
const countries87 = ["Finland", "Iceland", "Thailand", "Switzerland", "Canada"];

const allContainLand = countries87.every(country => country.includes("land"));

console.log(allContainLand);

//ques23
const countries45 = ["USA", "Canada", "Germany", "France", "Japan"];

const firstSixLetterCountry = countries45.find(country => country.length === 6);

console.log(firstSixLetterCountry); 

//ques24
const countries44 = ["USA", "Canada", "Germany", "France", "Japan"];

const firstSixLetterCountryIndex = countries44.findIndex(country => country.length === 6);

console.log(firstSixLetterCountryIndex); 

//ques25
const countries23 = ["USA", "Canada", "Germany", "France", "Japan"];

const norwayIndex = countries23.findIndex(country => country === "Norway");

console.log(norwayIndex);

//ques26
const countries98 = ["USA", "Canada", "Germany", "France", "Japan"];

const russiaIndex = countries98.findIndex(country => country === "Russia");

console.log(russiaIndex);


