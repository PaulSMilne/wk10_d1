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

var personalMoneys = [];
for (account in accounts){
  if (accounts[account].type === 'personal'){
    personalMoneys.push(accounts[account].amount)
  }
}

var biggestPersonal = Math.max.apply(null, personalMoneys);
var richPersonalAccountHolder;
for (account in accounts){
  if (accounts[account].amount === biggestPersonal){
    richPersonalAccountHolder = accounts[account].name;
  }
}
console.log(richPersonalAccountHolder);
