//Section 1

//what types are these? Write your answer in a comment beside it.

1; //Number
"cat"; //String
true; //Boolean
[]; //Object (Array)
{}; //Object (HashMap)
1.1; //Number
undefined; //undefined


//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; //true
true; //true
NaN; //false
[]; //true
{}; //true
undefined; //false
""; //false WHY?????
0; //false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var num = 42;
//3.2 Assign a variable that is a string
var animal = "pig";
//3.3 Assign a variable that is a boolean
var verity = true;
//3.4 Assign a variable that is an object
var details = {name: "Paul", age: 58, homeTown: "Dunbar"}


//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

function helloIfTrue(arg){
     if (arg){
          console.log("Hello");
          return;
     } 
     console.log("Bye")
}

helloIfTrue(true);


//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable

var firstAnimal = animals[0];

//5.2. Assign the last element to a variable

var lastAnimal = animals[3];
var lastAnimal = animals[animals.length - 1];

//5.3. Assign the length of an array to a variable

var animalCount = animals.length;

//5.4. Add an item to the end of the array

animals.push("pig");

//5.5. Add an item to the start of the array

animals.unshift("ostrich");

//5.6. Assign the index of hedgehog to a variable

var hedgehogIndex = animals.indexOf("hedgehog");

//Section 6

//6.1 Create an array of 5 vegetables

var veg = ["swede", "turnip", "rutabega", "spinach", "carrot"];

//6.2 Loop over the array and write to the console using a "while"

counter = 0;
while (counter < veg.length){
  console.log("Vegetable is " + veg[counter]);
  counter++;
}

//6.3 Loop again using a "for" with a counter

for (i=0; i<veg.length;i++){
  console.log("Vegetable is " + veg[i]);
}

//6.4 Loop again using a "for in"

for (var vegetable in veg){
  console.log("Vegetable is " + veg[vegetable]);
}

//6.5 Loop again using a "for of"

for (var vegetable of veg){
  console.log("Vegetable is " + vegetable);
}


//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];
//7.1 Calculate the total cash in accounts

var total = 0;
for (account in accounts){
  total = total + accounts[account].amount;
}
console.log(total);

for(account of accounts){
  total += account.amount;
}
console.log(total);


//7.2 Find the amount of money in the account with the largest balance

var moneys = [];
for (account of accounts) {
  moneys.push(account.amount) // loops through the array and pushes the values of amount into an empty array
}
var maximum = Math.max.apply(null, moneys); //finds the largest value in an array
console.log(maximum);


//7.3 Find the name of the account with the smallest balance

var moneys = [];
for (account of accounts) {
  moneys.push(account.amount) // loops through the array and pushes the values of amount into an empty array
}
var minimum = Math.min.apply(null, moneys); //finds the minimum value in the array

for (account of accounts){
     if (account.amount == minimum){ //looks for the object with the minimum value
          var poorPerson = account.name; //pulls out the name of the object found
     }
}
console.log(poorPerson);

//7.4 Calculate the average bank account value

var total = 0;
for (account of accounts){
  total = total + account.amount; //gets the total
}
var average = total/accounts.length; //gets the average
average = average.toFixed(2); //rounds the average to 2 decimal places
console.log(average);

//7.5 Find the value of marcs bank account


for (account of accounts){
     if (account.name === "marc"){ //looks for the object with the name
          var marcsMoney = account.amount; //pulls out the amount of the object found
     }
}
console.log(marcsMoney);

//7.6 Find the holder of the largest bank account

var moneys = [];
for (account of accounts) {
  moneys.push(account.amount) // loops through the array and pushes the values of amount into an empty array
}
var maximum = Math.max.apply(null, moneys); //finds the largest value in an array
var richPerson;
for (account of accounts){
  if (account.amount === maximum){ //looks for the account with the maximum amount
    richPerson = account.name;
  }
}
return richPerson;

//7.7 Calculate the total cash in business accounts

var businessMoneys = 0;
for (var account of accounts){
     if (account.type === 'business'){
          businessMoneys += account.amount;
     }
}
console.log(businessMoneys);

//7.8 Find the largest personal account owner

var personalMoneys = [];
for (account of accounts){
  if (account.type === 'personal'){
    personalMoneys.push(account.amount)
  }
}
var biggestPersonal = Math.max.apply(null, personalMoneys);

for (account of accounts){
  if (account.amount === biggestPersonal){
    var richPersonalAccountHolder = account.name;
  }
}
console.log(richPersonalAccountHolder);


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {
  name: "Paul", 
  height: 172, 
  favoriteFood: "lasagne",
  eat: function(){return ("Yum, let\'s have some " + this.favoriteFood) + ".";}
}
console.log(myPerson.eat());