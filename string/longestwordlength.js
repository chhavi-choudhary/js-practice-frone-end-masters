
function findLongestWord(str) {
    return str.length;
  }
 console.log( findLongestWord("The quick brown fox jumped over the lazy dog"));

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


 
 
 const longestwordLength=(str)=>{
  let longestwordLength=0;
  let splitStr=str.split(' ');
  for (i=0;i<splitStr.length;i++){
      if(splitStr[i].length>longestwordLength){
          longestwordLength=splitStr[i].length;
      }

  }
  return longestwordLength;
}
console.log(longestwordLength("I am the most-longest word here."))


function findLongestWordLength(str) {
  return str.split(' ')
    .reduce(function(longest, word) {
      return Math.max(longest, word.length)
    }, 0);
}
console.log(findLongestWord("ha hey really"))