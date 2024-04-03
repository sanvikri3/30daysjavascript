 //ques 1
 
let firstName="sanvi";
let lastName="kumari";
let country="india";
let city="gaya";
let age =19;
let isMarried="no";
let year= 19;
console.log(typeof firstName);
console .log(typeof lastName);
console.log(typeof country);
console .log(typeof city );
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//ques 2
console.log (typeof '10' == 10);

//ques 3
console.log(parseInt('9.8')==10);

//ques 4
//1.
let isLightOn= true;
console.log(isLightOn);
let isFanOn=true;
console.log(isFanOn);
let isgateOpen=true;
console.log(isgateOpen);
let is100=true;
console.log(is100);
//2.
let ishungry=false;
console.log(ishungry);
let isMarriedd=false;
console.log(isMarriedd);
let false1= false;
console.log(false1);
let false2=false;
console.log(false2);

//ques 5
//1
let a=4;
let b=3;
if(a>b)
{
    console.log("a is greater.");
}
else{
    console.log("b is greater");
}
console.log(a>b);

//2.
 if(a>=b)
 console.log( a,"is greater.");
else{
console.log( b,"is smaller.");
}
console.log(a>=b);

//3
if(a<b)
{
    console.log(a," is greater than ", b);
}
else{
    console.log(b, "is smaller than", a);
}
console .log(a<b);

//4
if(a<=b)
{
    console.log( b,"is less than .",a);
}
else{
    console.log(a, " is greater less than .",b);
}
console.log(a<=b);

//5
console.log(4 == 4);   

//6
console.log(4 === 4);

//7   
console.log(4 != 4);   

//8
console.log(4 !== 4);

//9   
console.log(4 != '4');

//10  
console.log(4 == '4'); 

//11
console.log(4 === '4'); 

//12
const python = "python";
const jargon = "jargon";
const pythonLength = python.length;
const jargonLength = jargon.length;
const falsyComparison = pythonLength === jargonLength;
console.log("Length of 'python':", pythonLength);
console.log("Length of 'jargon':", jargonLength);
console.log("Falsy comparison statement:", falsyComparison);


//ques 7

//1.

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
console.log("The year today is:", currentYear);

//2.
let now= new Date();
let currentMonth=(now.getMonth() +1);
console.log ("The month today is :",currentMonth);

//3.
let z=new Date();
let currentDay= z.getDay();
console.log("The today is :",currentDay);

//4.

let currentDatee = new Date();
 let currentDayy = currentDatee.getDay();
console.log("The day today as a number is:", currentDayy);

//5.
let currenthourse=new Date();
let hours=currenthourse.getHours();
console.log("The hours now:",hours);

//6.
let currentMintue=new Date();
let min= currentMintue.getMinutes();
console.log("The mintue now is:",min);

//7.
let CurrentDate =  new Date();
let jannuary1 = CurrentDate.getTime();
console.log("The numbers of seconds :", jannuary1);

//ques 6
//1
  let a1=4;
  let b1=3;
  let c=10;
  let d= 12;
  let e= "false";
  if(a1>b1 && c<d){
    
  }
  else{
    
  }
  console.log(a1>b1 && c < d );

  //2
  if(a1>b && a1>b)
  {
    
  }
  console.log(a1>b1 && c>d);

  //3
  if(a1>b1||c<d ){
    
  }
  console.log(a1>b1||c<d);

  //4
  if(a1>b1|| c>d){
    
  }
  console.log(a1>b1||c>d);

  //5
  if(!(a1>b1))
  {


  }
  else{
    
  }

  console.log(!(a1>b1));

  //6
  if(!( a1<b1)){
    
  }
  console.log(!(a1<b1));

  //7
if(!(c)){
  
}
else{
  
}
 console.log(!false);

 //8
 if(!(a1>b1 && c<d))
 {

 }
console.log(!a1>b1&&c<d);

//9
if(!(a1>b1 && c>d));{

}
console.log(!a1>b1&&c>d);

//10
if(!(a1==='4'))
{

}
console.log(!a1=='4');

//11
const dragon1 = "dragon";
const python1 = "python";
const dragonHasOn = dragon1.includes("on");
const pythonHasOn = python1.includes("on");
console.log("'dragon' contains 'on':", dragonHasOn);
console.log("'python' contains 'on':", pythonHasOn);






