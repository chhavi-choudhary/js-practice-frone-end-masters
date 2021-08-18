const palindrome=(string)=>{
    if(string.length==0 || string.length==1){
        return true;
    }
    else if(string.charAt(0)==string.charAt(string.length-1)){
        return palindrome(string.substring(1,string.length-1));
    }
    else{
        return false;
    }
}
console.log(palindrome("kayak"))
console.log(palindrome("kayakdfgit"))