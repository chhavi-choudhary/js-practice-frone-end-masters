// const revStr = (str)=>{
//     const arrayStr=str.split('');
//     const revArray=arrayStr.reverse();
//     const joinArray= revArray.join('');
//     return joinArray;
// }
// console.log(revStr("seriously"))

// const reverseString=(string)=>{
// let newString="";
// for (let i=string.length-1;i>=0;i--){
//     newString+=string[i]
// }
// return newString;
//  }
//  console.log(reverseString("happening yup"))

function findLongestWord(str) {
    return str.length;
  }
 console.log( findLongestWord("The quick brown fox jumped over the lazy dog"));

 //longest word length
 function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
 console.log(findLongestWord("The quicker brown fox jumped over the lazy dog"));
  
 
 //longest word
 function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = "";
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord.length){
      longestWord = strSplit[i];
       }
    }
    return longestWord;
  }
 console.log(findLongestWord("The quicker brown fox jumped over the lazy dog"));
  