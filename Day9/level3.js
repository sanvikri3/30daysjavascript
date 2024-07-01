//ques1
const countries = [
    { name: 'Finland', capital: 'Helsinki', population: 5536146 },
    { name: 'Sweden', capital: 'Stockholm', population: 10379295 },
    { name: 'Norway', capital: 'Oslo', population: 5421241 },
    { name: 'Denmark', capital: 'Copenhagen', population: 5814461 },
    { name: 'Iceland', capital: 'Reykjavik', population: 366425 }
];
const sortedByPopulation = [...countries].sort((a, b) => a.population - b.population);

console.log('Sorted by Population:', sortedByPopulation);