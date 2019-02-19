'use strict';

function createGreeting(name, age) { 
  testError(name, age);
  yearOfBirth(age); 
  const yob = getYearOfBirth(age);    
  return(`Hi, my name is ${name}, and I'm ${age}years old. I was born in ${yob}`);  
}

function yearOfBirth(age){
  if (age < 0) {
    throw new Error('Age can not be negative');
  }
  return age;
}

function testError(name, age) {
  if (name === undefined || age === undefined) {
    throw new Error('Arguments not valid');
  }
  if (typeof name !== 'string' || isNaN(age)) {
    throw new TypeError('Invalid variables');
  }
  return name, age;
}

function getYearOfBirth(age){
  const yearOfBirth = 2019 - age;
  return yearOfBirth;
}

try {
  const greeting1 = createGreeting('Silas', 24);
  console.log(greeting1);
} 
catch(e){
  console.log(e.message);
}