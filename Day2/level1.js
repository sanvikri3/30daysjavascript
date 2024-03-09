//ques 1
let challenge ='30 days of javascript';

//ques 2
console.log('string');

//ques 3
let a= 'hello world';
console.log(a.length);

//ques 4
let n="sanvi";
console.log(n.toUpperCase());

//ques 5
let m="SANVI";
console.log(m.toLowerCase());

//ques 6
let p="sanvi";
let s= p.substring(1,p.length);
console.log(s);

//ques7
let q="30 days of javascript";
let phrase=q.slice(3,q.length-1);
console.log(phrase);

//ques 8
let str="30 days of javascript";
let method=str.include("script");
console.log(method);

//ques 9
let w="30 days of javascript";
let x= w.split(" ");
console.log(x);

//ques 10
let z="30 days of javascript";
let pp=z.split(" ");
console.log(pp);

//ques 11
let hh='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let k= hh.split(",");
console.log(k);

//ques 12
let kk="30 days of javascript";
let re=kk.replace("javascript","python");
console.log(re);

//ques 13
let mm="30 days of javascript";
let nn=mm.charAt(15);
console.log(nn);

//ques 14
let l="30 days of javascript";
let kkk=l.charCodeAt(11);
console.log(kkk);

//ques 15
let ll="30 days of javascript";
let index=ll.indexOf("a");
console.log(index);

//ques 16
let string="30 days of javascript";
let lastindex=string.lastIndexOf("a");
console.log(lastindex);

//ques 17
let v='You cannot end a sentence with because because because is a conjunction';
let position=v.indexOf("because");
console.log(position);

//ques 18
let b='You cannot end a sentence with because because because is a conjunction';
let position2=b.lastIndexOf("because");
console.log(position2);

//ques 19
let g='You cannot end a sentence with because because because is a conjunction';
let position3=g.search("because");
console.log(position3);

//ques 20
let zz = ' 30 Days Of JavaScript ';
let trimmedStr = zz.trim();
console.log(trimmedStr);

//ques 21
let xx="30 days of javascript";
let start= xx.startsWith("30");
console.log(start);

//ques 22
let xxy="30 days of javascript";
let result=xxy.endsWith("30");
console.log(result);

//ques 23
let ch="30 days of javascript";
let result1=ch.match(/a/gi);
console.log(result1);

//ques 24
let strings1="30 Days of ";
let strings2="javascript";
let ans= strings1.concat( strings2);
console.log(ans);

//ques 25
let st= "30 days of javascript ";
let repeatstr=st.repeat(2);
console.log(repeatstr);
