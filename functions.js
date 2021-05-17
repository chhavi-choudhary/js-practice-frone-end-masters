let favoriteBooks=[];
const addFavoriteBook= (bookName)=>{
if (!bookName.includes("Great")){
   favoriteBooks.push(bookName)
}

}

const printFavoriteBooks=()=>{
    console.log(`Favorite Biooks:${favoriteBooks.length}`);
    for (let bookName of favoriteBooks){
        console.log(bookName);
    }
    
}
addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great GatsBy");
addFavoriteBook("Crime and punishment");
addFavoriteBook("Great expectations");
addFavoriteBook("You Don't know js");
console.log(favoriteBooks);
printFavoriteBooks();