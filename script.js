'use strict';

function yearOfBirth(age){
  if (age < 0) {
    throw new Error('Age can not be negative');
  }     
  return age;
}

function createGreeting(name, age) { 
  yearOfBirth(age); 
  const yob = getYearOfBirth(age);    
  return(`Hi, my name is ${name}, and I'm ${age}years old. I was born in ${yob}`);  
}

function getYearOfBirth(age){
  const yearOfBirth = 2019 - age;
  return yearOfBirth;
}

try {
  const greeting1 = createGreeting(name, age);
} 
catch(e){
  console.log(e.message);
}

//console.log(greeting1);