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

var moneys = [];
for (account in accounts) {
  moneys.push(accounts[account].amount) // loops through the array and pushes the values of amount into an empty array
}
var maximum = Math.max.apply(null, moneys); //finds the largest value in an array


var richPerson;
for (account in accounts){
  if (accounts[account].amount == maximum){ //looks for the account with the maximum amount
    richPerson = accounts[account].name;
  }
}

console.log(richPerson);