/**
*
*/

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
  "use strict";
  if(a > b) {
    return a;
  } else {
    return b;
  }
}

console.assert(max(13, 15) == 15, "max");


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
  "use strict";
  if(a > b && a > c){
    return a;
  } else if(b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.assert(maxOfThree(1, 2, 3) == 3, "maxOfThree")
console.log("maxOfThree: yes");


// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
  "use strict";
  var vowel = [a, e, i, o, u];
  if(vowel){
    return true;
  } else {
    return false;
  }
}



// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  "use strict";
  //...
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbers){
  "use strict";
  var sum = 0;
  numbers.forEach(function(num){
    sum += num;
  });
  return sum;
}

console.assert(sum([5, 10, 20, 100]) == 135, 'sum');
console.log("sum: success");


function multiply(numbers){
  "use strict";
  var multiply = 0;
  numbers.forEach(function(num){
    multiply *= num;
  });
  return multiply;
}

console.assert(multiply([1, 2, 3, 4]) == 24, 'multiply');


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
  "use strict";
  //...
}



// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  "use strict";
  //...
}


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
  "use strict";
  //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
  "use strict";
  //...
}
