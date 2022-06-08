// Write code to create a function that accepts an array of numbers and a target number

// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

const arr = [8, 50, 7, -6, -2];
const target = 50;
const linearSearch = (arr, target) => {
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
};

module.exports = {
  linearSearch,
  target,
  arr,
};
