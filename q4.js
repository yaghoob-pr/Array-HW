function extractNum(str) {
  let nums = str.match(/\d+/g);
  return nums;
}

let str = "i h4ve 22 apples and 3 pineapples";
nums = extractNum(str);
console.log(nums);
