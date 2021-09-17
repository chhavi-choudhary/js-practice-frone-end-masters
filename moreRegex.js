let str1="titanic";
let greedyRegex=/t[a-z]*i/;
let greedyMatch=str1.match(greedyRegex);
console.log(greedyMatch);

let lazyRegex=/t[a-z]*?i/;
let lazymatch=str1.match(lazyRegex);
console.log(lazymatch);


//Match Beginning String Patterns
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
//Match Ending String Patterns
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);

//Match All Letters and Numbers
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers));
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

//Specify Upper and Lower Number of Matches
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4));
console.log(multipleA.test(A2));