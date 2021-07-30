function frankenSplice(arr1, arr2, n) {
    const localArr2=arr2.slice()
    for (let i=0;i<arr1.length;i++){
      localArr2.splice(n,0,arr1[i])
      n++;
    }
    return localArr2;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

  const spliceArray=(array1,array2,m)=>{
    let localArray2=array2.slice()
    
      localArray2.splice(m,0,...array1)
    return localArray2
  }
  console.log(spliceArray([5,5,5],[3,3,3],2))