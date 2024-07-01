//ques1
const users = [
    {
        name: 'John',
        age: 25,
        skills: ['HTML', 'CSS']
    },
    {
        name: 'Jane',
        age: 30,
        skills: ['JavaScript', 'React', 'Node.js']
    },
    {
        name: 'Joe',
        age: 35,
        skills: ['Python']
    }
];

for (const { name, age, skills } of users) {
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Skills:', skills);
}

//ques2 
const usersWithLessThanTwoSkills = users.filter(({ skills }) => skills.length < 2);

console.log(usersWithLessThanTwoSkills);
