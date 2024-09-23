
function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return 'Invalid Input';
  }
  let i = 0;
  for (; i < name.length; i++) {
    if (!isNaN(name[i])) {
      return true;
    }
  }

  return false;
}

console.log(checkDigitsInName(["Raj"]));