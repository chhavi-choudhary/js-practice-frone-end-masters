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

