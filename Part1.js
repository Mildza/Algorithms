// 1. Function that returns the sum of all numbers

const sumAll = (...listOfNumbers) => {
  let result = 0;
  listOfNumbers.forEach((el) => (result += el));
  console.log("sum of all numbers: " + result);
};

sumAll(1, 2, 3, 4, 5); // 15
sumAll(1, 2, 3, 4, 6, 7, 8, 9, 10); // 50
//****************************************************************//

// 2. To given rectangular matrix of characters add a border of astrisk(*)

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

// 3. For given integer return the sum of its digits.

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

// 4. For given array of integers, find the pair of adjacent element that has the largest product.

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

// 5. For a given array of strings, return another array containing all of its longest strings.

const longestStrings = (arr) => {
  let longest = 0;
  arr.forEach((el) => {
    longest = el.length > longest ? el.length : longest;
  });
  const result = arr.filter((el) => el.length === longest);
  console.log(result);
};

longestStrings(["bad", "ab", "lsd", "gag", "a", "dr"]); // [ 'bad', 'lsd', 'gag' ]

//****************************************************************//

// 6. Given a sequence of array of integers, determine if it is possible to obtain strictly
// increasing sequence by removing no more than one element from the array.

const sequence = (arr) => {
  const result = [];
  for (i = 0; i < arr.length; i++) {
    const arrSpliced = [...arr];
    arrSpliced.splice(i, 1);
    const temp = [];
    for (j = 0; j < arrSpliced.length - 1; j++) {
      if (arrSpliced[j + 1] > arrSpliced[j]) {
        temp.push(true);
      } else {
        temp.push(false);
      }
    }
    temp.some((el) => el === false) ? result.push(false) : result.push(true);
  }
  result.some((el) => el === true)
    ? console.log("It can be strictly increaseing")
    : console.log("It can not be strictly increaseing");
};

sequence([1, 3, 2]); // true
sequence([1, 3, 2, 1]); // false
sequence([1, 5, 2, 4]); // true
//****************************************************************//

// 7. Given string, replace each character by the next one (English alphabet, z would replace by a).
const enigma = (task) => {
  const result = [];
  for (i = 0; i < task.length; i++) {
    let temp = task.charCodeAt(i);
    if (temp === 122) {
      temp = 97;
    } else if (temp === 90) {
      temp = 65;
    } else {
      temp = temp + 1;
    }
    result.push(String.fromCharCode(temp));
  }
  console.log(result.join(""));
};

enigma("AbzdZ"); // BcaeA

//****************************************************************//

// 8. Check whether the given string is a subsequence of the plaintext alphabet.

const subsequence = (task) => {
  const result = [];
  for (i = 0; i < task.length - 1; i++) {
    if (task.charCodeAt(i) >= task.charCodeAt(i + 1)) {
      result.push(false);
    } else {
      result.push(true);
    }
  }
  result.some((el) => el === false)
    ? console.log("Its not")
    : console.log("Its ok");
};

subsequence("abc"); // Ok
subsequence("amz"); // Ok
subsequence("cdce"); // Not
subsequence("abbj"); // Not
