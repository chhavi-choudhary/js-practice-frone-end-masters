const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  const{today, tomorrow}=HIGH_TEMPERATURES;
  console.log(today, tomorrow)
  
  
  // Assigning new values to variables from objects
  const user = { name: 'John Doe', age: 34 };
  const{name, age}=user;
  const{name:userName, age:userAge}=user;
  console.log(userName, userAge)
  //Assign Variables from Nested Objects
  const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };
  const { johnDoe: { age, email }} = user;
  const { johnDoe: { age: userAge, email: userEmail }} = user;

  //destructur with rest
  const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);