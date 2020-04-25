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
