function bouncer(arr) {
    let trueArray=[];
    for(let i =0;i<arr.length;i++){
      if(arr[i]){
        trueArray.push(arr[i])
      }
    }
    return trueArray;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));

  function bouncer(arr) {
    return arr.filter(Boolean);
  }