// Function that returns the sum of all numbers

const sum = (...listOfNumbers) => {
  let result = 0;
  listOfNumbers.forEach((el) => (result += el));
  console.log(result);
};

sum(1, 2, 3, 4, 5); // 15
sum(1, 2, 3, 4, 6, 7, 8, 9, 10); // 50
//*******************************************************//

// To given rectangular matrix of characters add a border of astrisk(*)

const addBorder = (picture) => {
  const wall = "*".repeat(picture[0].length + 2);
  const border = picture.map((el) => {
    return "*".concat(el, "*");
  });
  border.push(wall);
  border.unshift(wall);
  console.log(border);
};

const picture = ["abc", "def"];
const picture2 = ["abcd", "efgh"];
addBorder(picture); // [ '*****', '*abc*', '*def*', '*****' ]
addBorder(picture2); // [ '******', '*abcd*', '*efgh*', '******' ]
//*******************************************************//

// For given integer return the sum of its digits.

const sumOfDigits = (num) => {
  const arr = [...num.toString()];
  const sum = arr.reduce((total, el) => {
    return total + parseInt(el);
  }, 0);
  console.log(sum);
};
sumOfDigits(12); // 3
sumOfDigits(235); // 10
