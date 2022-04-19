// This will show the window in the global context
console.log(this);

// this will print as a string (This refers to the window object)
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

helloThis();

// This refers to the child object.Will console log 20
var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

child.ageTenYears();

// This refers to the investment object. Will log 5750
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

investor.investment.investmentGrowth ();