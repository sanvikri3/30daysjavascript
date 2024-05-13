//ques 1
function fullname()
{
 return "Sanvi kumari";
}

let Name= fullname();
console.log(Name);

//ques 2
  function fullName( a,c,b)
  {
    return a+c+b;
  }
    let a="sanvi";
    let b="kumari";
    let c=" ";

     console.log(fullName(a,b));

     //ques 3
      function addno(e,d){
        return e+d;
      }

      let e=8;
      let d=9;
      console.log(addno(e,d));

      //ques 4
      function areaofrec( l,w)
      {
        return l*w;
      }

      let l=10;
      let w= 20;
      console.log(areaofrec(l,w));

      //ques 5
       function perimeter( l1,w1)
       {
        return 2*(l1+w1);
       }
       let l1=58
       let w1=87;
       console.log(perimeter(l1,w1))

       //ques 6
       function volofprism(l1,w2,h){
        return l2*w2*h;
       }
       let l2=65;
       let w2=54;
       let h=10;
       console.log(volofprism(l2,w2,h));

        //ques 7
        function areaofcircle(r)
        {
            return 3.14*r*r;
        }      
        let r=49;
        console.log(areaofcircle(r));

        //ques 8
        function circum(r1)
        {
            return 2*3.14*r
        }
          let r1=43;
          console.log(circum(r1));
         

          //ques 9
           function density(mass,vol)
           {
            return mass/vol;
           }
           let mass=80;
           let vol=2;
           console.log(density(mass,vol));

           //ques 10
           function speed(totaltime,totaldis)
           {
            return totaldis/totaltime;
           }
             let totaltime=20;
             let totaldis=100;
             console.log(speed(totaltime,totaldis));

             //ques 11
             function weight(mass1,gravity)
             {
                return mass1*gravity; 
             }
             let mass1=76;
             let gravity=4;
             console.log(weight(mass1,gravity))

             //ques 12
             function oCtooF( oC )
             {
                return (oC *(9/5))+32;
             }
               let oC=68;
               console.log(oCtooF(oC));

               //ques 13
               function BMI(weight1,height1)
               {
                return d
               }

               let weight1=156;
               let height1=45;
               d=weight1/ (height1*height1);
               console.log(BMI());

                  if(d<18.5){
                    console.log("underweight")
                  }
                  else if ( d>18.5 && d<24.9)
                  {
                    console.log("normal weight")
    
                  }
                  else if(d>25 && d<29.9)
                  {
                    console.log("overweight");
                  }
                  else if(d==30 && d >30)
                  {
                    console.log("obese")
                    
                  }


                  //ques 14
                    function checkseason(month)
                    {
                        if(month=="january" || month=="february" || month=="december")
                        {
                            console.log("winter")
                        }
                        else if(month=="march" || month=="april" || month=="may")
                        {
                            console.log("spring")
                        }
                        else if(month=="june" || month=="july" || month=="august")
                        {
                            console.log("summer")
                        }
                        else if(month=="september" || month=="october" || month=="november")
                        {
                            console.log("autumn")
                        }
                    }
                    let month="july";
                    checkseason(month);


                    //ques 15
                    function findmax(x,y,z)
                    {
                        if(x>y && x>z)
                        {
                            console.log(x)
                        }
                        else if(y>x && y>z)
                        {
                            console.log(y)
                        }
                        else if(z>x && z>y)
                        {
                            console.log(z)
                        }
                    }
                    let x=10;
                    let y=20;
                    let z=30;
                    findmax(x,y,z);