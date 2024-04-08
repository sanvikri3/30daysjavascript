
//ques 1

let emptyarray=[ ];
console.log(emptyarray);

//ques 2

let array=[2,4,5,6,7];
console.log(array);

//ques 3
console.log(array.length);

//ques 4
console.log(array[0]);
console.log(array[2]);
console.log(array[array.length-1]);

//ques 5
let mixedarray = [1, "hello", true, false,"sanvi", 5];
console.log(mixedarray.length);


//ques 6
let itcompanies= ["facebook", "google","microsoft","apple","IBM","Oracle","amazon"];

//ques 7
console.log(mixedarray);


//ques 8
console.log( "Number of companies is : ", itcompanies.length);

//ques 9
console.log("first company is :" , itcompanies[0]);
console.log("middle company is:" , itcompanies[3]);
console.log("last company is :" , itcompanies[itcompanies.length-1]);

//ques 10
 console.log (itcompanies);

 //ques 11
    let company= [ "facebook", "google", "microsoft", "apple", "IBM", "Oracle", "amazon"];
    for (let i=0; i<company.length; i++){
        let m= company[i].toUpperCase();
        console.log(m);
    }


    //ques 12
    let company1= [ "facebook", "google", "microsoft", "apple", "IBM", "Oracle", "amazon"];
    let sentence= company1.join(" , ") +" are big IT companies.";
    console.log(sentence);


    //ques 13
    let company2= [ "facebook", "google", "microsoft", "apple", "IBM", "Oracle", "amazon"];
      let company3 = " twitter";
      if( company2.includes(company3)){
          console.log(company3);
      }
      else{
        console.log("company not found");
      }

      //ques 14
        let company4= [ "facebook", "google", "microsoft", "apple", "IBM", "Oracle", "amazon"];
        let filtercompany= [];
        for (let i=0; i<company4.length; i++){
           let companyname= company4[i];
           let ocount=0;
            

           for (let j=0; j<companyname.length; j++){
               if(companyname[j] .toLowerCase() === "o"){
                   ocount++;
               }
           }
           if(ocount>1){
            filtercompany.push(companyname);

        }
    }
     console.log("companies with more than 'o' :",filtercompany);


     //ques 15
     let company5= [ "facebook", "google", "microsoft", "apple", "IBM", "Oracle", "amazon"];
    company5.sort();
    console.log("sorting compaies are: ",company5);

    //ques 16
    company5.reverse();
    console.log("reversed array is :", company5);

    // ques 17
    console.log(company5.slice(0,3));


    //ques 18
    console.log(company5.slice(3,6));


    //ques 19

const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
const middleIndex = Math.floor(companies.length / 2);
let middleCompanies;
if (companies.length % 2 === 0) {
    middleCompanies = companies.slice(middleIndex - 1, middleIndex + 1);
} else {
    middleCompanies = companies.slice(middleIndex, middleIndex + 1);
}
console.log("Middle IT company or companies:", middleCompanies);


//ques 20
 let company6= [ "facebook", "google", "microsoft", "apple", "IBM", "Oracle", "amazon"];
    company6.shift();
    console.log(company6);

    //ques 21
  
let companies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let middleIndex1 = Math.floor(companies.length / 2);
if (companies1.length % 2 === 0) {
    companies1.splice(middleIndex1 - 1, 2);
} else {
    companies1.splice(middleIndex1, 1); 
}
console.log("Array after removing middle IT company or companies:", companies1);

//ques22

let removedLastCompany = companies1.pop();
console.log("Array after removing last IT company:", companies1);
console.log("Removed last IT company:", removedLastCompany);

//ques 23
companies1 = companies1.filter(company => !company.includes("IT"));
console.log("Array after removing all IT companies:", companies1);
