const revStr = (str)=>{
    const arrayStr=str.split('');
    const revArray=arrayStr.reverse();
    const joinArray= revArray.join('');
    return joinArray;
}
console.log(revStr("seriously"))


const reverseString=(string)=>{
let newString="";
for (let i=string.length-1;i>=0;i--){
    newString+=string[i]
}
return newString;
 }
 console.log(reverseString("happening yup"))




const revStr=(str)=>{
  let reverseStr=""
  const splitStr=str.split('');
  for (let i=splitStr.length-1;i>0;i--){
    reverseStr+=splitStr[i]
  }
  return reverseStr;
}
console.log(revStr("reverse"))