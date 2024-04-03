//ques 1

 //let age = prompt("enter age:");
 //age= parseInt(age);
 let age =12;
 if(age>=18)
 {
    console.log("you are old enough to drive");
 }
   else{
    let m= 18-age;
    console.log(" you are left with ",  m + " years to drive." );
   }


   //ques 2

   //let myage = prompt("enter myage:");
   //myage=parseInt(myage);
    //let yourage=prompt("enter your age:");
     //yourage=parseInt(yourage);
     let myage=30;
     let yourage=25;
     if(myage>=yourage)
     {
        console.log("you are", myage-yourage + " years older than me.")
     }

     //ques 3
         //if-else
        let a= 25;
        let b= 45;
        if(a>=b){
            console.log( a," is greater than " , b);
        }
        else{
            console.log( b," is greater than " , a);
        }
              
          //ternary 
          let max, a1=4, b1=3; 
             max= a1>b1?a1:b1;
              console.log(a1," is greater than " , b1);
        

          //ques4
               let number= 9;
               if(number%2==0)
               {
                console.log( number,"is an even number." ) ;
               }     
                  else{
                    console.log( number,"is an odd number.");
                  }
              



                  //ques 2
//let month = prompt("Enter the month: ");
//let year = (prompt("Enter a year to check: "));
let month= "may";
let year= "2023";
month = month[0].toUpperCase() + month.slice(1).toLowerCase();
switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log(month," has 31 days in ",year);
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log(month," has 30 days in ",year);
    break;
  case "February":
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log(month, "has 29 days in", year);
      break;
    } else {
      console.log(month," has 28 days in ",year);
      break;
    }
  default:
    alert("Invalid month ");
    break;
}