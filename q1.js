function deleteByIndex(arr, index) {
  arr.splice(index, 1);
}

let arr = ["a", "b", "c"];
deleteByIndex(arr, 1);
console.log(arr);
