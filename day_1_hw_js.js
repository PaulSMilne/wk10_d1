//Section 1

//what types are these? Write your answer in a comment beside it.

1; //Number
"cat"; //String
true; //Boolean
[]; //Array
{}; //Object (hashmap)
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
[];
{};
undefined; //false
""; //false
0; //false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var num = 42;
//3.2 Assign a variable that is a string
var animal = "pig";
//3.3 Assign a variable that is a boolean
var verity = "true";
//3.4 Assign a variable that is an object
var details = {name: "Paul", age: 58, homeTown: "Dunbar"}


//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

function helloIfTrue(argument){
     if (argument){
          console.log("Hello");
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

//5.3. Assign the length of an array to a variable

var animalCount = animals.length;

//5.4. Add an item to the end of the array

animal.push("pig");

//5.5. Add an item to the start of the array

animal.shift("ostrich");

//5.6. Assign the index of hedgehog to a variable

var hedgehogIndex = animals["hedgehog"];

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
//7.2 Find the amount of money in the account with the largest balance
//7.3 Find the name of the account with the smallest balance
//7.4 Calculate the average bank account value
//7.5 Find the value of marcs bank account
//7.6 Find the holder of the largest bank account
//7.7 Calculate the total cash in business accounts
//7.8 Find the largest personal account owner


//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method
