function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
  }
  function checkSign(num) {
    return num>0?"positive":num<0?"negative":"zero"
    }
    
    checkSign(10);