const confirmEnding=(string,target)=>{
    if(string.substr(-target.length)===target){
        return true;
    }
    else {
        return false;
    }
}
console.log(confirmEndings("Open sesame", "same"))

function confirmEndings(string, target) {
    return (string.substr(-target.length) === target) ? true : false;
  }
  console.log(confirmEndings('Bastian', 'n'));