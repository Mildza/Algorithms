// 1. For a given array of integers, on each move it's allowed to increase exactly one of it's element by one. Find the minimal moves required to obtain a strictly increasing sequence from the input.

const increasingSequence = (arr) => {
  let shifts = 0;
  const recursion = (arr, i) => {
    if (arr[i + 1] > arr[i]) {
      return shifts;
    } else {
      arr[i + 1] += 1;
      shifts++;
      return recursion(arr, i);
    }
  };
  for (let i = 0; i < arr.length - 1; i++) {
    recursion(arr, i);
  }
  console.log(`${arr} => ${shifts}`);
};
increasingSequence([1, 1, 1]); //  [ 1, 2, 3 ] => 3
increasingSequence([2, 1, 1]); // [ 2, 3, 4 ] => 5

//****************************************************************//

// 2. After algorithm has finished, there will be a single element left in the array.
// - On the 1st, 3rd, 5th ... iterations replace each pair of consecutive elements with their sum.
// - on the 2nd, 4th, 6th ... iterations replace each pair of consecutive elements with their product.

const sumProduct = (arr) => {
  const sum = (array) => {
    let temp = [];
    for (let i = 0; i < array.length; i += 2) {
      temp.push(array[i] + array[i + 1]);
    }
    return temp;
  };
  const multiply = (array) => {
    let temp = [];
    for (let i = 0; i < array.length; i += 2) {
      temp.push(array[i] * array[i + 1]);
    }
    return temp;
  };

  const recursion = (array, callback) => {
    if (array.length === 1) {
      return console.log(array[0]);
    } else {
      if (callback.name === "sum") {
        recursion(callback(array), multiply);
      } else recursion(callback(array), sum);
    }
  };
  recursion(arr, sum);
};

sumProduct([1, 2, 3, 4, 5, 6, 7, 8]); // 186
// [1, 2, 3, 4, 5, 6, 7, 8] => [3, 7, 11, 15] => [21, 165] => [186]
//****************************************************************//

// 3. For given array of integers, find the maximal absolute differnce between any two of its adjacent elements.

const maxDifference = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max =
      Math.abs(arr[i] - arr[i + 1]) > max ? Math.abs(arr[i] - arr[i + 1]) : max;
  }
  console.log("max: " + max);
};

maxDifference([2, 4, 1, 0]); // 3
maxDifference([7, -3, 0, 8]); // 10

//****************************************************************//

// 4. For given an array of integers, replace all the occurrences of the element to replace with substituion element.

const arrayReplace = (arr, el, sub) => {
  // String version
  const str = arr.toString().replace(new RegExp(el, "g"), sub);
  console.log(str.split(",").map((el) => Number(el)));
  arr2 = [...arr];
  // Array version 1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      arr.splice(i, 1, sub);
    }
  }
  console.log(arr);
  // Array version 2
  arr2.forEach((item, index) => {
    if (item === el) {
      arr2[index] = sub;
    }
  });
  console.log(arr2);
};
arrayReplace([1, 2, 1], 1, 3); // elToReplace=1, subEl=3 => [3, 2, 3]

//****************************************************************//

// 5. For given the positions of white bishop and a black pawn on the standard chess board, determine whether the bsihop can capture the pawn in one move.

const bishopPawn = (bishop, pawn) => {
  const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };
  const bishopX = board[bishop[0]];
  const bishopY = parseInt(bishop[1]);
  const pawnX = board[pawn[0]];
  const pawnY = parseInt(pawn[1]);
  if (
    bishopX + bishopY === pawnX + pawnY ||
    bishopX + pawnY === bishopY + pawnX
  ) {
    console.log("The pawn is eaten");
  } else {
    console.log("The pawn cannot be eaten");
  }
};

bishopPawn("a1", "c3");
bishopPawn("d3", "f5");
//****************************************************************//

// 6. n children have got m pisces of candy. They want to eat as much they ca, but each child must exactly eat the same amount of candys as any other child.
// Determine how many piesces of candy will be eaten by all the children together. Individual piesces of candy cannot be split.

const candy = (n, m) => {
  const candies = n * Math.floor(m / n);
  console.log("Total candies eaten: " + candies);
};
candy(3, 10); // 9
candy(4, 20); // 20

// 7. For a given string, check if can become a palindrome through a case of some (possibly, none) letters.

const palindrome = (str) => {
  const orinigal = str.toLowerCase();
  const reversed = orinigal.split("").reverse().join("");
  if (orinigal === reversed) {
    console.log("Its palindrome");
  } else {
    console.log("Its not palindrome");
  }
};
palindrome("AaBaa");
palindrome("abac");

//****************************************************************//

// 8. For a given year, return the century it is in. The first century spans from the year 1 up to and including year 100, the secend from the year 101 up to and including 200.

const century = (year) => {
  const century = Math.floor(year / 100);
  const reminder = year % 100;

  if (reminder === 0) {
    console.log(century);
  } else {
    console.log(century + 1);
  }
};

century(1905); // 20
century(1700); // 17
century(801); // 9
century(89); // 1

//****************************************************************//

//****************************************************************//
