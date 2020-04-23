// 1.Function that returns the sum of all numbers

const sumAll = (...listOfNumbers) => {
  let result = 0;
  listOfNumbers.forEach((el) => (result += el));
  console.log("sum of all numbers: " + result);
};

sumAll(1, 2, 3, 4, 5); // 15
sumAll(1, 2, 3, 4, 6, 7, 8, 9, 10); // 50
//****************************************************************//

// 2.To given rectangular matrix of characters add a border of astrisk(*)

const addBorder = (picture) => {
  const wall = "*".repeat(picture[0].length + 2);
  const border = picture.map((el) => {
    return "*".concat(el, "*");
  });
  border.push(wall);
  border.unshift(wall);
  console.log(border);
};

addBorder(["abc", "def"]); // [ '*****', '*abc*', '*def*', '*****' ]
addBorder(["abcd", "efgh"]); // [ '******', '*abcd*', '*efgh*', '******' ]
//****************************************************************//

// 3.For given integer return the sum of its digits.

const sumOfDigits = (num) => {
  const arr = [...num.toString()];
  const sum = arr.reduce((total, el) => {
    return total + parseInt(el);
  }, 0);
  console.log("sum: " + sum);
};
sumOfDigits(12); // 3
sumOfDigits(235); // 10

//****************************************************************//

// 4.For given array of integers, find the pair of adjacent element that has the largest product.

const largestProduct = (arr) => {
  let max = 0;
  for (i = 0; i < arr.length - 1; i++) {
    const product = arr[i] * arr[i + 1];
    max = product > max ? product : max;
  }
  console.log("max: " + max);
};

largestProduct([3, 6, -2, -5, 7, 3]); // 21
//****************************************************************//

// 5.For a given array of strings, return another array containing all of its longest strings.

const longestStrings = (arr) => {
  let longest = 0;
  arr.forEach((el) => {
    longest = el.length > longest ? el.length : longest;
  });
  const result = arr.filter((el) => el.length === longest);
  console.log(result);
};

longestStrings(["bad", "ab", "lsd", "gag", "a", "dr"]); // [ 'bad', 'lsd', 'gag' ]
