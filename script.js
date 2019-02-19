'use strict';
function createGreeting(name, age) { 
  const yob = getYearOfBirth(age);   
  return(`Hi, my name is ${name}, and I'm ${age}years old. I was born in ${yob}`);
}

function getYearOfBirth(age){
  const yearOfBirth = 2019 - age;
  return yearOfBirth;
}

const greeting1 = createGreeting();
console.log(greeting1);