//ques 1
  let Randomid = (length) => {
    let randomid="";
    let randomchar="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0;i<length;i++)
    {
        randomid+=randomchar.charAt(Math.floor(Math.random()*randomchar.length));
    }
    return randomid;
}

let randomid1=Randomid(12);
let randomid2=Randomid(24);
console.log("Random id of length 12:",randomid1);
console.log("Random id of length 24:",randomid2);

//ques 2

let characters='0123456789ABCDEF';
let m='#';
for(let i=0;i<6;i++)
{
    m=m+characters[Math.floor(Math.random()*16)+1];
}
console.log("Random color:",m);

//ques3
 let red=Math.floor(Math.random()*256+1);
    let green=Math.floor(Math.random()*256+1);
    let blue=Math.floor(Math.random()*256+1);

    let randomRgbcolor=`rgb(${red},${green},${blue})`;
    console.log("Random RGB color:",randomRgbcolor);

    //ques 4
     let countriess=["Albania","Bolivia","Canada","Denmark","Ethiopia","Finland","Germany","Hungary","Ireland","Japan"];
     let uppercaseCountriess=[];
     for(let i=0;i<countriess.length;i++)
     {
         uppercaseCountriess.push(countriess[i].toUpperCase());
     }
        console.log("Countries in uppercase:",uppercaseCountriess);


        //ques 5
        const countrie = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

const countrieLength = [];

for (let country of countries) {
    countrieLength.push(country.length);
}

console.log(countrieLength);

//ques 6
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    ]

const arr = [[]]
for(let j=0; j<countries.length; j++){
for(let i=0; i<countries.length; i++){
    arr[i].push(countries[i]);
    arr[i].push(countries[i].slice(0,4).toUpperCase());
    arr[i].push(countries[i].length);
}}
console.log(arr);

//ques 7
const countries2 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    ]

var count = 0;
const arr_land = []
for(let i=0; i<countries2.length; i++){
    if(countries[i].includes('land')){
        arr_land.push(countries[i]);
        count++;
    }
}
if(count>0){
    console.log("Countries are with land :",arr_land);
}
else{
    console.log('All these countries are without land:',countries2);
}

//ques 8
const countries1 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    ]

var count = 0;
const arr_land1 = []
for(let i=0; i<countries1.length; i++){
    if(countries1[i].includes('ia')){
        arr_land1.push(countries1[i]);
        count++;
    }
}
if(count>0){
    console.log("Countries are ends with ia :",arr_land1);
}
else{
    console.log('These are countries ends without ia:',countries1);
}

//ques 9
const countries4= [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    ]

var len =0;
var index =0;
for(let i=0; i<countries4.length;  i++){
    if(countries4[i].length>len){
        len = countries4[i].length;
        index = i;
    }
}
console.log(countries4[index]);

//ques 10
const countries5 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
    ]

var arr1 = [];
for(let i=0; i<countries.length5;  i++){
    if(countries5[i].length==5){
        arr1.push(countries5[i]);
    }
}
console.log(arr1);

//ques 11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

var len =0;
var index =0;
for(let i=0; i<webTechs.length;  i++){
    if(webTechs[i].length>len){
        len = webTechs[i].length;
        index = i;
    }
}
console.log(webTechs[index]);

//ques 12
const webTechs1 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ]

const arr1 =[[]];

for(let i=0; i<webTechs1.length; i++){
    arr1.push(webTechs1[i],webTechs1[i].length);
}

console.log(arr1);

//ques 14
const webTechs2 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ]

for(let i=0; i<webTechs2.length; i++){
    console.log(webTechs2[i]);
}

//ques 15
const fruit = ['banana', 'orange', 'mango', 'lemon'];

let i = 0;
let j = fruit.length-1;
while(i<j){
    var temp = fruit[i];
    fruit[i]=fruit[j];
    fruit[j]=temp;
    i++;
    j--;
}

console.log(fruit);

//ques 16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
    ]

for(let i=0; i<fullStack.length; i++){
    for(let j=0; j<fullStack[i].length;j++){
        console.log(fullStack[i][j].toUpperCase());
    }
}
