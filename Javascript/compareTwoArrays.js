const array1 = ["a", "b", "c", "s"];
const array2 = ["p", "k", "j"];

function compareTwoArrays(array1, array2) {
  const object1 = array1.reduce((obj, val, i) => ({ ...obj, [val]: i }), {});

  for (let i = 0; i < array2.length; i++) {
    if (object1.hasOwnProperty(array2[i])) {
      return true;
    }
  }
  return false;
}

const compareTwoArrays2 = (array1, array2) => {
  let array1Set = new Set(array1);

  for (let i = 0; i < array2.length; i++) {
    if (array1Set.has(array2[i])) return true;
  }
  return false;
};

function compareTwoArrays3(array1, array2) {
  let objArray1 = {};
  for (let i = 0; i < array1.length; i++) {
    objArray1[array1[i]] = i;
  }
  for (let j = 0; j < array2.length; j++) {
    if (objArray1.hasOwnProperty(array2[j])) {
      return true;
    }
  }
  return false;
}

console.log(compareTwoArrays3(array1, array2));
