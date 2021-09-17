// function User(fName, lName){
//     this.firstName=fName;
//     this.lastname=lName;
// }
// let user1=User("kaaa","paaa");
// let user2=new User("jon", "Doe");
// let user3=new User("rieeee", "deee");
// console.log(user1)
// console.log(user2)
// console.log(user3)



class Person{
    constructor(lastName, firstName){
        this.lastName=lastName;
        this.firstName=firstName;
    }
    sayHello() {
        console.log(`hey how are you ${this.firstName} my friend`)
    }
}
const john=new Person("kumar", "Anuj");
console.log(john.sayHello())
