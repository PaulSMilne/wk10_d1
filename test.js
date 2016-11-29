// var myPerson = {name: "Paul", height: 172, favoriteFood: "pizza", eatFunction: function eat(){return ("Yum, let's have some " + this.favoriteFood)}};

var myPerson = {
  name: "Paul", 
  height: 172, 
  favoriteFood: "lasagne",
  eat: function(){return ("Yum, let\'s have some " + this.favoriteFood) + ".";}
}
console.log(myPerson.eat());