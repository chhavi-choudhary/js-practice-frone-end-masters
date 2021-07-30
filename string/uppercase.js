function titleCase(str) {
    let strArray=str.toLowerCase().split(' ');
    let titleCase=strArray.map(letter=>{
      return letter.replace(letter.charAt(0), letter.charAt(0).toUpperCase())
    })
    return titleCase.join(" ")
  }
  
 console.log(titleCase("I'm a little tea pot"));


 function titleCase2(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
  }
  console.log(titleCase2("i will wOn Yess"))