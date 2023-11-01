function mergeSortedArrays(array1, array2) {
  if (
    !Array.isArray(array1) ||
    !Array.isArray(array2) ||
    array1.length === 0 ||
    array2.length === 0
  ) {
    return [];
  }

  const mergedArray = new Array(array1.length + array2.length);
  let arr1Item = array1[0];
  let arr2Item = array2[0];

  //   mergedArray = [...array1, ...array2];

  //   for (let i = 0; i < mergedArray.length - 2; i++) {
  //     console.log(mergedArray[i]);
  //     if (mergedArray[i] > mergedArray[i + 1]) {
  //       let nextItem = mergedArray[i + 1];
  //       mergedArray[i + 1] = mergedArray[i];
  //       mergedArray[i] = nextItem;
  //     }
  //   }
  return mergedArray;
}

console.log(mergeSortedArrays([1, 3, 4], [1, 3, 4, 5, 6]));
