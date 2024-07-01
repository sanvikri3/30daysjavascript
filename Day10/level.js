//ques1
let emptyset = new Set ();
console.log(emptyset);

//ques2
const numSet=new Set();
for(let i =0;i<=10;i++){
    numSet.add(i);
}
console.log(numSet);

//ques3
numSet.delete(5); 
console.log(numSet);

//ques4
numSet.clear();
console.log(numSet);

//ques5
const countries = new Set(['Finland', 'Sweden', 'Norway']);
const stringSet = new Set(countries);
console.log(stringSet);

//ques6
const countryMap = new Map();

countries.forEach(country => {
    countryMap.set(country, country.length);
});

console.log(countryMap);

