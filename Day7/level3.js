//ques 1
 

       

//ques 2
function rgbcolorgenerator( a,b,c){
    return `rgb(${a},${b},${c})`;
 
}
let a=125;
let b=244;
let c=255;
console.log(rgbcolorgenerator(a,b,c));

//ques 3
 function arrayofhexacolor(numcolors){
      let colors=[];
      for(let i=0;i<numcolors;i++)
      {
        let color='#';
        for(let j=0;j<6;j++)
        {
            color += Math.floor(Math.random()*16).toString(16);
        }
        colors.push(color);
      }
      return colors;
 }
    console.log(arrayofhexacolor(3));

 //ques 4
 function arrayofrgbcolor(arr)
 {
        let colors=[];
        for(let i=0;i<arr.length;i++)
        {
            colors.push(`rgb(${arr[i][0]},${arr[i][1]},${arr[i][2]})`);
        }
        return colors;
 }
    let arr=[[125,244,255],[255,255,255],[255,0,0]];
    console.log(arrayofrgbcolor(arr));

    //ques 5
    function converthexatorgb(hex)
    {
        let r=parseInt(hex.substring(1,3),16);
        let g=parseInt(hex.substring(3,5),16);
        let b=parseInt(hex.substring(5,7),16);
        return `rgb(${r},${g},${b})`;
    }

    let hex='#ffffff';
    console.log(converthexatorgb(hex));

    //ques 6
    function convertrgbtohex(r,g,b1)
    {
        return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    }
    let r=255;
    let g=255;
    let b1=255;
    console.log(convertrgbtohex(r,g,b1));


    //ques 7
    function generaterandomcolor()
    {
        let r=Math.floor(Math.random()*256);
        let g=Math.floor(Math.random()*256);
        let b=Math.floor(Math.random()*256);
        return `rgb(${r},${g},${b})`;
    }
    console.log(generaterandomcolor());
      

    //ques 8
    function sufflearray(arr)
    {
        for(let i=arr.length-1;i>0;i--)
        {
            let j=Math.floor(Math.random()*(i+1));
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
        return arr;
    }
    let arr1=[1,2,3,4,5,6,7,8,9];
    console.log(sufflearray(arr1));

    //ques 9
    function factorial(n)
    {
        let fact=1;
        for(let i=1;i<=n;i++)
        {
            fact *=i;
        }
        return fact;
    }
    let n=5;
    console.log(factorial(n));

    //ques 10
    function isEmpty()
    {
        let obj={};
        return Object.keys(obj).length === 0;
    }
    console.log(isEmpty()); 
  
    //ques 11
    function sumofarray(arr)
    {
        let sum=0;
        for(let i=0;i<arr.length;i++)
        {
            sum +=arr[i];
        }
        return sum;
    }
    let arr2=[1,2,3,4,5,6,7,8,9];
    console.log(sumofarray(arr2));


    //ques 12
    function sumofarrayitem(arr){

        let sum=0;
        for(let i=0;i<arr.length;i++)
        {
            sum +=arr[i];
        }
        return sum;
    }
    let arr3=[1,2,3,4,5,6,7,8,9];
    console.log(sumofarrayitem(arr3));

    //ques 13
    function averageofarray(arr)
    {
        let sum=0;
        for(let i=0;i<arr.length;i++)
        {
            sum +=arr[i];
        }
        return sum/arr.length;
    }

     //ques 14
     function modifyArray(arr) {
        if (arr.length < 5) {
            return 'item not found';
        } else {
            arr[4] = arr[4].toUpperCase();
            return arr;
        }
    }
    console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));
    
        //ques 15
    function isprime(n)
    {
        let count=0;
        for(let i=2;i<=n;i++)
        {
            if(n%i==0)
            {
                count++;
            }
        }
        if(count==1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    console.log(isprime(5));

    //ques 16
    function checkuniquearray()
    {
        let arr=[1,2,3,4,5,6,7,8,9,10];
        let unique=new Set(arr);
        if(arr.length==unique.size)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    console.log(checkuniquearray());

    //ques 17
    function checksamedatatype()
    {
        let arr=[1,2,3,4,5,6,7,8,9,10];
        let datatype=typeof(arr[0]);
        for(let i=0;i<arr.length;i++)
        {
            if(typeof(arr[i])!=datatype)
            {
                return false;
            }
        }
        return true;
    }
    console.log(checksamedatatype());


    //ques 18
    function isValidVariable(variableName) {
        const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
        return regex.test(variableName);
    }
    console.log(isValidVariable('myVariable')); // true
    console.log(isValidVariable('_myVariable')); // true
    console.log(isValidVariable('$myVariable')); // true
    console.log(isValidVariable('123myVariable')); // false
    console.log(isValidVariable('my-Variable')); // false
    

    //ques 19
    function sevenrandomnumber()
    {
        let arr=[];
        for(let i=0;i<7;i++)
        {
            arr.push(Math.floor(Math.random()*9 )+1);
        }
        return arr;
    }
    console.log(sevenrandomnumber());

    //ques 20
    function reversecountries()
    {
        let countries=[ "India", "USA", "Russia", "China", "Pakistan"];
        return countries.reverse();
    }
    console.log(reversecountries());







