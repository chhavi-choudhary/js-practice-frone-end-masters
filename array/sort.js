const primeNumbers=[1,3,5,7,8,1,2,33];
console.log(primeNumbers.sort(function(num1,num2){
if(num1>num2){
    return 1
}
else if(num2>1){
    return -1
}
else{
    return 0
}
}))