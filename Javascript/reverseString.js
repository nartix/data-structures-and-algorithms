const string = 'Hi, my name is feroz';

// Time Complexity O(n)
function reverseString2(string) {
  if (typeof string !== 'string' || string.length < 2 || !string) {
    return null;
  }
  // better to initialize an array size if known so constant size memory will be allocated
  let reversedString = new Array(string.length);
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i]);
  }
  return reversedString.join('');
}

// bad - strings are immutable so javascript creates a new string and copies over new string to variable when
//       when using operator +=
// Time Complexity O(n^2)
function reverseString(string) {
  if (typeof string !== 'string' || string.length < 2 || !string) {
    return null;
  }
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    // O(n)
    // below operation O(n)
    reversedString += string[i];
  }
  return reversedString;
}

function reverseString3(string) {
  if (typeof string !== 'string' || string.length < 2 || !string) {
    return null;
  }
  return string.split('').reverse().join('');
}

const reverseString4 = (string) => string.split('').reverse().join('');
const reverseString5 = (string) => [...string].reverse().join('');

console.log(reverseString3('Hello World'));
