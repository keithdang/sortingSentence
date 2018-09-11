function printArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function quickSort(arr, left, right, bLower) {
  var len = arr.length,
    pivot,
    partitionIndex;
  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right, bLower);
    quickSort(arr, left, partitionIndex - 1, bLower);
    quickSort(arr, partitionIndex + 1, right, bLower);
  }
  return arr;
}
function partition(arr, pivot, left, right, bLower) {
  var pivotValue = arr[pivot],
    partitionIndex = left;
  for (var i = left; i < right; i++) {
    if (compareSentence(arr[i], pivotValue, bLower)) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function compareSentence(sentence1, sentence2, bLower) {
  var bLess = false;
  if (sentence1 && sentence2) {
    if (bLower) {
      let code1 = sentence1.charCodeAt(0);
      let code2 = sentence2.charCodeAt(0);
      if (code1 > 96 && code1 < 123 && (code2 > 64 && code2 < 91)) {
        bLess = true;
      } else if (code2 > 96 && code2 < 123 && (code1 > 64 && code1 < 91)) {
      } else if (sentence1 < sentence2) {
        bLess = true;
      }
    } else {
      if (sentence1 < sentence2) {
        bLess = true;
      }
    }
  }
  return bLess;
}
function removeNonAlpha(word) {
  var parsedWord = "";
  for (var i = 0; i < word.length; i++) {
    if (
      word.charAt(i) !== "-" &&
      word.charAt(i) !== "(" &&
      word.charAt(i) !== ")"
    ) {
      parsedWord += word.charAt(i);
    }
  }
  return parsedWord;
}
module.exports = {
  quickSort: quickSort,
  printArray: printArray,
  removeNonAlpha: removeNonAlpha
};
