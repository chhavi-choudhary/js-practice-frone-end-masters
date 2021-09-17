let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr));

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result)

let petString = "James has a pet cat and dog.";
let petRegex = /dog|cat|bird|fish/; 
let result1 = petRegex.test(petString);
console.log(result1)

let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamP/i; //i flag ignores the case
let result2 = fccRegex.test(myString1);
console.log(result2)

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));

let testStr2 = "Repeat, Repeat, Repeat";
let ourRegex2 = /Repeat/;
console.log(testStr2.match(ourRegex2));

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; 
let result3 = twinkleStar.match(starRegex); 
console.log(result3)

let humStr = "I'll hum a song hunga";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);


let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
let result4= quoteSample.match(vowelRegex); 
console.log(result4, result4.length)

// match all the letters
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result5= quoteSample.match(alphabetRegex); 
console.log(result5)
// match all the letters and numbers
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
let result6=jennyStr.match(myRegex);
console.log(result6)
//not match specified characters
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/ig; 
let result7 =quoteSample.match(myRegex);
console.log(result7)

let difficultSpelling = "Mississippi";
let myRegex8 = /s+/ig; 
let result8 = difficultSpelling.match(myRegex8);
console.log(result8, result8.length)

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
