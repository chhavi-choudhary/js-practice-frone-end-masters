//Random Whole number
function randomWholeNum(){
    return Math.floor(Math.random()*20)
}
console.log(randomWholeNum())


function randomrange(myMin, myMax){
    return Math.floor(Math.random()*(myMax+1-myMin))+myMin;
}
console.log(randomrange(1,44))