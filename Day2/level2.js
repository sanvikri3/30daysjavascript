// ques 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up',by john holmes teaches us to help one another.")

// ques 2
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

//ques 3
if (typeof '10' !== 'number') {
    const num = parseInt('10');
    if (num === 10) {
        console.log("typeof '10' is now exactly equal to 10");
    } else {
        console.log("typeof '10' is not exactly equal to 10 after conversion");
    }
} else {
    console.log("typeof '10' is already exactly equal to 10");
}

//ques 4
let  num = parseFloat('9.8');
if(num!==10){
console.log("parseFloat('9.8') is not equal to 10");
let adNum= math.ceil(num);
console.log("adjusted value:",adNum);
}
else 
{
console.log("paresnFloat('9.8') is equal to 10");
}

//ques 5
let python ="python";
let jargon="jargon";
let substring="on";
if(python.indexOf(substring)!==-1 && jargon.indexOf(substring)!==-1)
{
    console.log("'found in both'");
}
else{
    console.log("'not found'");
}

//ques 6
let sen=" I hope this course found in the sentence";
let word="jargon";
if(sen.includes(word))
{
    console.log("found in sentence.");

}
else{
    console.log("not found in sentence");
}