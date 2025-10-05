var isDate = function (input) {
  //   write your code here
  if (input instanceof Date && !isNaN(input.getTime())) return true;
  // Try to parse input as a date
  let date = new Date(input);
  // Check if parsing gives a valid date
  return !isNaN(date.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
