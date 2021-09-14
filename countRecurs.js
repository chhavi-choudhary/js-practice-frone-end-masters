function countup(n) {
    let arr=[];
    if (n < 1) {
      return arr;
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(7));