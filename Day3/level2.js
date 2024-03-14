
//ques 1
let base=20;
let height=10;
let area= 0.5*base*height;
console.log("the area of a triangle is:",area);

//ques 2
let a=5;
let b=4;
let c=3;
let perimeter=a+b+c;
console.log("the perimeter of a triangle:",perimeter);


//ques 3
// let length1 = prompt("Enter the length of the rectangle:");
// length1 = parseFloat(length);
// let width1 = prompt("Enter the width of the rectangle:");
// width1 = parseFloat(width);
// let area1 = length * width;
// let perimeter1= 2 * (length + width);
// console.log("The area of the rectangle is:", area);
// console.log("The perimeter of the rectangle is:", perimeter);

//ques 4
// let r =prompt("enter radius:");
// r= parseFloat(r);
// let area2= (3.14* r*r);
// console.log("the area of circle is:",area2);
// let circumference2=(2*3.14*r);
// console.log("the circumference of circle is: ",circumference);

//ques 5
let xx=10;
let yy=(2*xx-2);
console.log(yy);

//ques 6
  let x1=2;
  let x2=6;
  let y1=2;
  let y2=10;
  let m=(y2-y1)*(x2-x1);
  console.log(m);

  //ques 7;
  if(m>yy){
    console.log("slope os y is greater.",yy);
  }
  else
  {
    console.log("slope of m is greater.",m);
  }

  //ques 8
  let y=0;
  let x=20;
  let m1= (y=x*x +6*x+9);
  console.log(m1);

  //ques 9

  // let hours=prompt("enter hours:");
  // hours=parseInt(hours);
  // let rateperhour=prompt("enter rate per hours:");
  // rateperhour=parseInt(rateperhour);
  // console.log("your weekly earning is:",hours*rateperhour);

  //ques 10
  let myname="sanvi";
  if(myname.length>7)
  {
    console.log("my name is long.");
  }
  else{
    console.log("my name is short.");
  }

  //ques 11
  let firstname="sanvi";
  let lastname="babloo";
  if(firstname.length>lastname.length)
  {
    console.log("my name, ",firstname +"is longer than my family name", lastname);
  }
  else{
    console.log("my name, ",lastname +"is longer than my family name", firstname);
  }

  //ques 12
  let myAge= 250;
  let yourAge=25;
  let age= myAge-yourAge;
  console.log("I am", age +"years older than you.");

  //ques 13
  // let birthyr= prompt("enter birth year:");
  // birthyr=parseInt(birthyr);
  // let currentyear=new Date().getFullYear();
  // let age2 =currentyear-birthyr;
  // if(age2>=18)
  // {
  //   console.log("your are ", age2 + ".you are old enough to drive.");
  // }
  // else{
  //   let yearstowait= 18-age2;
  //   console.log("you are", age2 + ". you will be allowed to drive after",yearstowait,+"years.");
  // }

  //ques  14
  // let years= prompt("enter number of years you live:");
  // years=parseInt(years);
  // let livedsecond= 365*24*60*60;
  // let m3=livedsecond*years;
  // console.log("you lived",m3+ "years.");

  //ques 15

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
const day = String(currentDate.getDate()).padStart(2, '0');
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const format1 = `${year}-${month}-${day} ${hours}:${minutes}`;
const format2 = `${day}-${month}-${year} ${hours}:${minutes}`;
const format3 = `${day}/${month}/${year} ${hours}:${minutes}`;
console.log("YYYY-MM-DD HH:mm:", format1);
console.log("DD-MM-YYYY HH:mm:", format2);
console.log("DD/MM/YYYY HH:mm:", format3);





