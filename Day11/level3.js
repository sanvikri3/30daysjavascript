//ques 1
const countries = [
    {
        name: 'Finland',
        capital: 'Helsinki',
        population: 5536146,
        languages: ['Finnish', 'Swedish']
    },
    {
        name: 'Estonia',
        capital: 'Tallinn',
        population: 1328976,
        languages: ['Estonian']
    },
    {
        name: 'Sweden',
        capital: 'Stockholm',
        population: 10353442,
        languages: ['Swedish']
    }
    
];
countries.forEach(({ name, capital, population, languages }) => {
    console.log(`Name: ${name}`);
    console.log(`Capital: ${capital}`);
    console.log(`Population: ${population}`);
    console.log(`Languages: ${languages.join(', ')}`);    console.log('---');
});

//  ques2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

const [name, skills, [, , jsScore, reactScore]] = student;

console.log(name); 
console.log(skills); 
console.log(jsScore); 
console.log(reactScore);

// ques3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];
function convertArrayToObject(arr) {
    return arr.map(([name, skills, scores]) => {
        const [htmScore, cssScore, jsScore, reactScore] = scores;
        return { name, skills, scores: { htmScore, cssScore, jsScore, reactScore } };
    });
}

const studentsObject = convertArrayToObject(students);
console.log(studentsObject);

