function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] >= num)
         return i;
     }
   
     return arr.length;
     
     
   }
   
  console.log(getIndexToIns([40, 60], 50));

  function getIndexToIns(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
  }
  
  console.log(getIndexToIns([1, 3, 4], 2));