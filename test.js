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
