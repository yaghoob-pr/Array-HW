function remDuplicate(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
}

let arr = [1, 1, 1, 4, 5, 3, 1, 5, 3, 9];
remDuplicate(arr);
console.log(arr);
