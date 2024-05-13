 //ques 1
 
   function linearequation( a,x,b,y,c)
   {
      return (a*x) +(b*y)+c;
   }

   let a=10;
   let x=15;
   let b=31;
   let y=21;
   let c=5;
  console.log(linearequation(a,x,b,y,c));

  //ques 2
  // function solvequadratic(a1,b1,c1)


    //ques 3
    function printarr(array)
    {
        for(let i=0; i<array.length; i++)
        {
            console.log(array[i]);
        }
    }
    let array=[2,4,5,6,7];
    printarr(array);


    //ques 4
    //function showdatatime()





    //ques 5
    function swapvalue( x2,y2)
    {
        let temp=x2;
          x2=y2;
          y2=temp;
          console.log(`x=> ${x2} and y=> ${y2}`)

    }
 swapvalue(3,4);
 swapvalue(4,5);

 //ques 6
 function  reversearray( arr)
 {
    let  reversearr=[];
    for(let i =arr.length-1;i>=0;i--)
    {
reversearr.push(arr[i]);
    }
    return reversearr;
 }
 console.log(reversearray([2,4,5,6,7]));
 console.log(reversearray(['A','B','C','D','E']));

    //ques 7
    function capitalizearray( arr)
    {
        let capitalarr=[];
        for(let i=0; i<arr.length; i++)
        {
            capitalarr.push(arr[i].toUpperCase());
        }
        return capitalarr;
    }
    console.log(capitalizearray(['a','b','c','d','e']));

//ques 8
function addItem( arr, item)
{
    let newarr=[];
    for(let i=0; i<arr.length; i++)
    {
        newarr.push(arr[i]);
    }
    newarr.push(item);
    return newarr;
}
console.log(addItem([2,4,5,6,7], 8));

    //ques 9
    function removeitem( arr, item)
    {
        let newarr=[];
        for(let i=0; i<arr.length; i++)
        {
            if(arr[i]!==item)
            {
                newarr.push(arr[i]);
            }
        }
        return newarr;
    }
    console.log(removeitem([2,4,5,6,7],5));

    //ques 10
    function sumofnumber( arr)
    {
        let sum=0;
        for(let i=0; i<arr.length; i++)
        {
            sum+=arr[i];
        }
        return sum;
    }
    console.log(sumofnumber([2,4,5,6,7]));

    //ques 11
    function sumofodd( num)
   {
         let sum=0;
         for(let i=0; i<num.length; i++)
         {
              if(num[i]%2!==0)
              {
                sum+=num[i];
              }
         }
         return sum;
   } 
    console.log(sumofodd([2,4,5,6,7]));

    //ques 12
    function sumofeven( num)
    {
        let sum=0;
        for(let i=0; i<num.length; i++)
        {
            if(num[i]%2===0)
            {
                sum+=num[i];
            }
        }
        return sum;
    }
    {
        console.log(sumofeven([2,4,5,6,7]));
    }

    //ques 13
    function evensandodds( num)
    {
        let even=0;
        let odd=0;
        for(let i=0; i<num.length; i++)
        {
            if(num[i]%2===0)
            {
                even+=num[i];
            }
            else
            {
                odd+=num[i];
            }
        }
        return `sum of even numbers is ${even} and sum of odd numbers is ${odd}`;
    }

    console.log(evensandodds([2,4,5,6,7]));

    //ques 14
    function  anyargument()
    {
        let sum=0;
        for(let i=0; i<arguments.length; i++)
        {
            sum+=arguments[i];
        }
        return sum;
    }
    console.log(anyargument(2,4,5,6,7));
    console.log(anyargument(2,4,5,6,7,8,9,10));

    //ques 15
    function randomuserIp()
    {
        let ip="";
        for(let i=0; i<4; i++)
        {
            ip+=Math.floor(Math.random()*256);
            if(i<3)
            {
                ip+=".";
            }
        }
        return ip;
    }
    console.log(randomuserIp());

    //ques 16
    function randommac()
    {
        let mac="";
        for(let i=0; i<6; i++)
        {
            mac+=Math.floor(Math.random()*16).toString(16);
            if(i<5)
            {
                mac+=":";
            }
        }
        return mac;
    }
    console.log(randommac());

    //ques 17
    function randomhex()
    {
        let hex="#";
        let hexchar="0123456789ABCDEF";
        for(let i=0; i<6; i++)
        {
            hex+=hexchar[Math.floor(Math.random()*16)];
        }
        return hex;
    }
    console.log(randomhex());

    //ques 18
    function userid()
    {
        let id="";
        let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(let i=0; i<8; i++)
        {
            id+=char[Math.floor(Math.random()*62)];
        }
        return id;
    }
    console.log(userid());