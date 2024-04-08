//ques 1
//.1
 let age=[19,22,19,24,20,25,26,24,25,24]
  console.log(age.sort());
  
  console.log("minmum age:",age[0]);
  console.log("maximum age:",age[age.length-1]);

  //.
    let medianAge;
    if(age.length%2==0)
    {
  let median1=age.length/2 - 1;
  let median2=age.length/2;
  medianAge=(age[median1]+age[median2])/2;
    }
    else{
      let  midindex=Math.floor(age.length/2);
        medianAge=age[midindex];
    }
    console.log("median age:",medianAge);

    //.
    let avgage;
    avgage=age.reduce((a,b)=>a+b,0)/age.length;
    console.log("average age:",avgage);
    
    //.
    let range;
    range=age[age.length-1]-age[0];
    console.log("range of age:",range);

    //. 
    console.log( " the value of (min- avg)",Math.abs(age[0]-avgage));
    console.log(" the value of (max-avg) ",Math.abs(age[age.length-1]-avgage));
    
    //ques 2
    let countries=[ "India", "USA", "Russia", "China", "Pakistan","Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", ];
    let slicecountries= countries . slice(0,10);
    console.log( slicecountries);

    //ques 3
    let middleCountries;
if (countries.length % 2 === 0) {
    // Even number of countries
    const middleIndex = countries.length / 2 - 1;
    middleCountries = [countries[middleIndex], countries[middleIndex + 1]];
} else {
    // Odd number of countries
    const middleIndex = Math.floor(countries.length / 2);
    middleCountries = [countries[middleIndex]];
}
console.log("Middle Country(ies):", middleCountries);

//ques 4
let countries1 = ["India", "USA", "Russia", "China", "Pakistan", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh"];

let totalCountries = countries1.length;
let splitIndex = totalCountries % 2 === 0 ? totalCountries / 2 : Math.ceil(totalCountries / 2);

let firstHalf = countries1.slice(0, splitIndex);
let secondHalf = countries1.slice(splitIndex);

console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);








