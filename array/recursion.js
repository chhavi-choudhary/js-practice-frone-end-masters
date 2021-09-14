const reverseString=(str) =>{
    if(str === ""){
        return "";
    }
    else {
        return reverseString(str.substring(1))+str.charAt(0);
    }
}
console.log(reverseString("welcome"))
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("hello"));

  // replace loops with recursion
  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

  function add(arr, n){
      if(n<=0){
          return 0;
      }
      else{
          return add(arr, n-1)+arr[n-1]
      }
  }