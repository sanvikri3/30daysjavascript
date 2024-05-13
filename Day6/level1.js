//ques 1
//for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log(" ");
//while loop
let j = 0;
while (j <= 10) {
    console.log(j);
    j++;
}
console.log(" ");
//do-while loop
let k = 0;
do {
    console.log(k);
    k++;
}
while (k <= 10);

//ques 2
//for loop
for (let m = 10; m >= 0; m--) {
    console.log(m);
}
console.log(" ");
//while loop
let n = 10;
while (n <= 0) {
    console.log(n);
    n++
}
//do-while loop
let p = 10;
do {
    console.log(p);
    p++;
}
while (p <= 0);


//ques 3
//let z=prompt("enter number:")
//z=Number.parseInt(z);
let z = 15;
for (let i = 0; i <= z; i++) {
    console.log(i);
}

//ques 4
for(let i=0;i<7;i++)
{
  let line=" ";
    for(let j=0;j<=i;j++)
    {
         line += '#' ;
}
console.log(line);

}
//ques 5
let m=11;
for(let i=0;i<m;i++)
{
  s=i*i;
  console.log(`${i} * ${i} = ${s}`);
}
console.log(" ")
//ques 6
console.log( "i  i^2 i^3");
for(let i=0;i<11;i++)
{
 let sq= i*i;
 let cube=i*i*i;
 console.log(`${i}  ${i*i}  ${i*i*i}`);
}
console.log(" ")
    //ques 7
    let num = 100;
    console.log( " even numers between 1 and 100 are :" );
    for(let i=0;i<=num;i++){
        if(i%2==0){
            console.log(i);
        }
    }


    //ques 8
    
    console.log( " odd numers between 1 and 100 are :" );
    for(let i=0;i<=num;i++){
        if(i%2!=0){
            console.log(i);
        }
    }

    //ques 9
   

  let count;
  console.log("prime number between 1 and 100 are:");
for(let i= 2;i<=100;i++)
{
    count=0;
     for(let j=2;j<i;j++)
     {
            if(i%j==0)
            {
                count++;
                break;
            }
        
     }

if(count==0)
{
    console.log(i);
}
}


//ques 10
   let sum=0;

   for(let i=0;i<=100;i++)
   {
       sum=sum+i;
   }
    console.log(`sum of first 100 numbers is: ${sum}`);

 //ques 11

  let sumeven=0;
  let sumodd=0;
  for(let i=0;i<=100;i++)
{
    if(i%2==0)
    {
        sumeven=sumeven+i;
    }
    else{
        sumodd=sumodd+i;
    }
}
 console.log("the sum of even number is :",sumeven);
 console.log("sum of odd number is :",sumodd);

 //ques 12
 let sumeven1=0;
  let sumodd1=0;
  for(let i=0;i<=100;i++)
{
    if(i%2==0)
    {
        sumeven1=sumeven1+i;
    }
    else{
        sumodd1=sumodd1+i;
    }
}
 let arr=[sumeven1,sumodd1];
 console.log("sum of even and odd as array:", arr)


 //ques 13
       let randomarr=[]
       
        for (let i =0;i<5;i++)
        {
            let randomnumber=Math.floor(Math.random()*5)+1;
            randomarr.push(randomnumber);
        }
        console.log("array of 5 random number is:", randomarr)
       
//ques 14
   let  uniqueRandomNumbers = [];

   while (uniqueRandomNumbers.length < 5) {
       let randomNumber = Math.floor(Math.random() * 5) + 1; 
           uniqueRandomNumbers.push(randomNumber);
       }

   
   console.log("Array of 5 unique random numbers:", uniqueRandomNumbers);

   //ques 15
    
   let  char ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let randomId = '';
for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * char.length);
    randomId += char[randomIndex];
}
console.log("Random ID:", randomId);




   
    