function largestOfFour(arr) {
    let newArr=[0,0,0,0];
    for (let i=0;i<arr.length ;i++){
      for (let j=0;j<arr[i].length; j++){
        if(arr[i][j]>newArr[i])
        newArr[i]=arr[i][j];
      }
    }
    return newArr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


function largestOfFour(arr) {
    let newArr = [];
    for (i=0; i<arr.length; i++) {
      let largest = 0;
      for (j=0; j<arr[i].length; j++) {
        if (arr[i][j] > largest) {
          largest = arr[i][j];
        }
      }
      newArr.push(largest);
    }
    return newArr;
  }
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



  function largestOfFour(mainArray) {
    return mainArray.map((subArray)=> {
      return Math.max.apply(null, subArray);
    });
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);