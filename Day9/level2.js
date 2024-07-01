//ques1
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 },
    { name: 'Monitor', price: null },
    { name: 'Keyboard', price: undefined }
];

const totalPrice = products
    .map(product => product.price)
    .filter(price => price !== null && price !== undefined)
    .reduce((acc, price) => acc + price, 0);

console.log(totalPrice);

//ques2
const sumPrice = products.reduce((acc, product) => {
    if (product.price !== null && product.price !== undefined) {
        return acc + product.price;
    }
    return acc;
}, 0);

console.log(sumPrice);


//ques3 
const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland", "Estonia", "Latvia", "Lithuania", "Ireland", "Thailand", "Switzerland", "Canada", "Australia"];

function categorizeCountries(pattern) {
    return countries.filter(country => country.includes(pattern));
}

console.log(categorizeCountries('land')); 
console.log(categorizeCountries('stan'));


//ques4
function countStartingLetters(countries) {
    return countries.reduce((acc, country) => {
        let letter = country.charAt(0);
        if (!acc[letter]) {
            acc[letter] = 1;
        } else {
            acc[letter]++;
        }
        return acc;
    }, {});
}
const startingLetterCounts = countStartingLetters(countries);

const letterCountsArray = Object.keys(startingLetterCounts).map(letter => ({
    letter: letter,
    count: startingLetterCounts[letter]
}));

console.log(letterCountsArray);
    
//ques5
function getFirstTenCountries() {
    return countries.slice(0, 10);
}

console.log(getFirstTenCountries());

//ques6
function getLastTenCountries() {
    return countries.slice(-10);
}

console.log(getLastTenCountries());

//ques7
function mostCommonStartingLetter(countries) {
    const startingLetterCounts = countStartingLetters(countries);
    const mostCommonLetter = Object.keys(startingLetterCounts).reduce((a, b) => 
        startingLetterCounts[a] > startingLetterCounts[b] ? a : b
    );
    return mostCommonLetter;
}

console.log(mostCommonStartingLetter(countries));
