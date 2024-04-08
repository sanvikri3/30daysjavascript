// ques 2
let text='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let cleanedText=text.replace(/[^\w\s]/g, '');
let words=Array.from(cleanedText.split(" "));

let wordcount=words.length;
console.log(words);
   console.log( "number of words:",wordcount);

// ques 3
  let shoppingcart=['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingcart.unshift('Meat');
       console.log(shoppingcart);

    shoppingcart.push('sugar');
   console.log(shoppingcart);

   if('allergic to honey')
   {
       shoppingcart.splice(4,1);
  console.log(shoppingcart);
   }


const teaIndex = shoppingcart.indexOf('Tea');
if (teaIndex !== -1) {
   shoppingcart[teaIndex] = 'Green Tea';
}

console.log(shoppingcart);

// ques 4  
let countries=[ "India", "USA", "Russia", "China", "Pakistan"];
     if(countries.includes("ETHIOPIA"))
     {
        console.log("ETHIOPIA");
     }
     else{
    countries.push("ETHIOPIA");
    console.log(countries);
        
     }
         
     
     //ques 5
     let web_tech=[ "HTML", "CSS", "JS", "React", "Node", "MongoDB"];
     let chechtech= 'Saas';
        if(web_tech.includes(chechtech))
        {
            console.log(`${chechtech}, "is a  CSS preprocess.`);
        }
        else{
            web_tech.push(chechtech);
            console.log(web_tech);
        }
         

        //ques 6
        let frontEnd= ['HTML', 'CSS', 'JS', 'React' , 'Redux'];
        let backEnd= ['Node', 'Express', 'MongoDB'];
        let fullStack= frontEnd.concat(backEnd);
        console.log(fullStack);

