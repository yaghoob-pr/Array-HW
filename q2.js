function combineSort(arr1, ...arrs) {
  let result = [];
  result = result.concat(arr1, ...arrs);
  result.sort((a, b) => a - b);
  return result;
}

let a = [1, 3, 4];
let b = [9, 5, 6];
let c = [8, 1, 4];
let result = combineSort(a, b, c);
console.log(result);
