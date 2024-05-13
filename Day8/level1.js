//ques 1
let dog={};

//ques 2
console.log(dog);

//ques 3
dog = {
    name: "Buddy",
    legs: 4,
    color: "brown",
    age: 10,
    bark: function(){
        return "woof woof";
    }
};

//ques 4
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());


//ques 5
dog.breed = "French bulldogs";
console.log(dog.breed);
dog.getDoginfo=function(){
    return `Name: ${dog.name}, Legs: ${dog.legs}, Color: ${dog.color}, Age: ${dog.age}`;
}
console.log(dog.getDoginfo());
