
function calculateTax(income, expenses) {

  if( typeof income !== "number" || typeof expenses !== "number" ||
      income <= 0 || expenses <= 0 || income < expenses
  ){

    return 'Invalid Input';
  }

  let result = (income - expenses)*.20;
return result;
}

let x = calculateTax(5000, 1500);

console.log(x);