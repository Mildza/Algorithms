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
