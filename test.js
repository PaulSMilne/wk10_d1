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
  // console.log(moneys)

var minimum = Math.min.apply(null, moneys);

// console.log(minimum);

var poorPerson;

for (account in accounts){
     if (accounts[account].amount == minimum){
          poorPerson = accounts[account].name;
     }
}

console.log(poorPerson);
