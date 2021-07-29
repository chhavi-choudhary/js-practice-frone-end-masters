const longestWord=(string)=>{
    const spltString=string.split(' ')
    let longestWord=""
    for(let i=0;i<spltString.length;i++){
        if(spltString[i].length>longestWord.length){
            longestWord=spltString[i]
        }
    }
return longestWord;
}
console.log(longestWord("I am the longest word here."))
console.log(longestWord("I am the most-longest word here."))


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
