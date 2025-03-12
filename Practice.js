/* 
    Question - 
    Convert an array of numbers into a new array with every element Multiplied by 2
*/

let arr = [1, 4, 5, 6, 3, 7];
let doubleArr = arr.map((num) => num * 2);
console.log(doubleArr);

/* 
    Question - 
    Convert an array of numbers into a new array with only the even elements
*/

let brr = [1, 4, 5, 6, 3, 7];
let evenArr = arr.filter((num) => num % 2 == 0);
console.log(evenArr);

/* 
    Question - 
    Convert an array of numbers into a array with its square
*/

let crr = [3, 4, 1, 5, 6];
console.log(crr);
crr = crr.map((num) => num * num);
console.log(crr);

/* 
    Question - 
    Write a function `isAnagram` which takes 2 parameters and returns true/false 
    if those are anagrams or not.
    
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, 
    such as spar, formed from rasp.
*/

let str1 = "openai";
let str2 = "aiopen!";

function isAnagram(str1, str2) {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
  let result1 = 1;
  let result2 = 1;

  if (s1.length != s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    result1 = result1 & s1[i];
  }

  for (let i = 0; i < s2.length; i++) {
    result2 = result2 & s2[i];
  }

  if (result1 == result2) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram(str1, str2));
