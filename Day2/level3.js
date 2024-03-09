
//ques 1
let a = "love is the best things in this world. some found their love and some are still looking for their love.";
let count=(a.match(/love/gi)|| []).length;
console.log(count);

//ques 2
let b="you cannot end a sentence with because because because is a conjunction";
let count2=(b.match(/because/gi) || []).length;
console.log(count2);

//ques 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace(/[^a-zA-Z0-9]/g," "))


//ques 4
let  text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numbers = text.match(/\d+/g);
let totalIncome = 0;
if (numbers) {
    numbers.forEach(number => {
        totalIncome += parseInt(number);
    });
}
totalIncome += parseInt(numbers[0]) * 12;
totalIncome += parseInt(numbers[2]) * 12;
console.log("Total annual income:", totalIncome, "euro");
