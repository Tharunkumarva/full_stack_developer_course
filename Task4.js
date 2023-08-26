// print odd numbers in an array


// let numbers = [1,2,3,4,5,6,7,8,9,10];
// function findOddNumber(){
// for(numbers of numbers){
//    if(numbers %2 !== 0){
//       console.log(numbers);
//    }
// }

// }

// findOddNumber();

// string to tittle caps in string array-IIFE

// let stringArray = ["world", "morning", "day"];

// (function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let words = arr[i].split(" "); // Split the string into words
//     for (let j = 0; j < words.length; j++) {
//       words[j] = words[j][0].toUpperCase() + words[j].substr(1).toLowerCase();
//     }
//     arr[i] = words.join(" "); // Join the words back into a title-cased string
//   }
// })(stringArray);

// console.log(stringArray);



// string to tittle caps in string array-anonymous

// let stringArray = ["world", "morning", "day"];

// let convertToTitleCase = function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let words = arr[i].split(" "); // Split the string into words
//     for (let j = 0; j < words.length; j++) {
//       words[j] = words[j][0].toUpperCase() + words[j].substr(1).toLowerCase();
//     }
//     arr[i] = words.join(" "); // Join the words back into a title-cased string
//   }
// };

// convertToTitleCase(stringArray);
// console.log(stringArray);


// sum of all numbers in arrays - IIFE

// let numbers = [1, 2, 3, 4, 5];

// let sum = (function(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// })(numbers);

// console.log(sum);
 

// sum of all numbers in arrays - anonymous

// let numbers = [1, 2, 3, 4, 5];

// let calculateSum = function(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// };

// let sum = calculateSum(numbers);
// console.log(sum);

// Return all primary numbers in array - IIFE

// let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// let primeNumbers = (function(arr) {
//   let primes = [];

//   function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (isPrime(arr[i])) {
//       primes.push(arr[i]);
//     }
//   }

//   return primes;
// })(numbers);

// console.log(primeNumbers); 


// Return all primary numbers in array - anonymous

// let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// let findPrimeNumbers = function(arr) {
//   let primes = [];

//   function isPrime(number) {
//     if (number <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (isPrime(arr[i])) {
//       primes.push(arr[i]);
//     }
//   }

//   return primes;
// };

// let primeNumbers = findPrimeNumbers(numbers);
// console.log(primeNumbers);

// Return all the palindroms in an arrays - IIFE

// let numbers = [121, 1331, 123, 56565,444, 67876];

// let palindromeNumbers = (function(arr) {
//   let palindromes = [];

//   function isPalindrome(number) {
//     let str = number.toString();
//     let reversedStr = str.split("").reverse().join("");
//     return str === reversedStr;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (isPalindrome(arr[i])) {
//       palindromes.push(arr[i]);
//     }
//   }

//   return palindromes;
// })(numbers);

// console.log(palindromeNumbers);


// Return all the palindroms in an arrays - anonymous

// let numbers = [121, 1331, 123, 444, 67876];

// let findPalindromeNumbers = function(arr) {
//   let palindromes = [];

//   function isPalindrome(number) {
//     let str = number.toString();
//     let reversedStr = str.split("").reverse().join("");
//     return str === reversedStr;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (isPalindrome(arr[i])) {
//       palindromes.push(arr[i]);
//     }
//   }

//   return palindromes;
// };

// let palindromeNumbers = findPalindromeNumbers(numbers);
// console.log(palindromeNumbers);


// Return medium of two sorted arrays on the same size -IIFE

// let array1 = [1, 3, 5];
// let array2 = [2, 4, 6];

// let median = (function(arr1, arr2) {
//   let combinedArray = arr1.concat(arr2);
//   combinedArray.sort(function(a, b) {
//     return a - b;
//   });

//   let midIndex = Math.floor(combinedArray.length / 2);
//   return (combinedArray[midIndex] + combinedArray[midIndex - 1]) / 2;
// })(array1, array2);

// console.log(median);

// Return medium of two sorted arrays on the same size -anonymous

// let array1 = [1, 3, 5];
// let array2 = [2, 4, 6];

// let calculateMedian = function(arr1, arr2) {
//   let combinedArray = arr1.concat(arr2);
//   combinedArray.sort(function(a, b) {
//     return a - b;
//   });

//   let midIndex = Math.floor(combinedArray.length / 2);
//   return (combinedArray[midIndex] + combinedArray[midIndex - 1]) / 2;
// };

// let median = calculateMedian(array1, array2);
// console.log(median);


// Remove dupulicate from an array - IIFE

// let numbers = [1, 2, 2, 3, 4, 4, 5,8,9,9];

// let uniqueNumbers = (function(arr) {
//   let uniqueArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueArr.indexOf(arr[i]) === -1) {
// //       uniqueArr.push(arr[i]);
// //     }
// //   }
// //   return uniqueArr;
// // })(numbers);

// // console.log(uniqueNumbers);


// // Remove duplicate from an array - anonymous

// // let numbers = [1, 2, 2, 3, 4, 4, 5, 9,7, 9];


// // let removeDuplicates = function(arr) {
// //   let uniqueArr = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (uniqueArr.indexOf(arr[i]) === -1) {
// //       uniqueArr.push(arr[i]);
// //     }
// //   }
// //   return uniqueArr;
// // };

// // let uniqueNumbers = removeDuplicates(numbers);
// // console.log(uniqueNumbers);

// // Rotate an array by k times - IIFE

// let originalArray = [1, 2, 3, 4, 5];
// let k = 2; // Number of rotations

// let rotatedArray = (function(arr, rotations) {
//   let rotated = [];

//   for (let i = arr.length - rotations; i < arr.length; i++) {
//     rotated.push(arr[i]);
//   }

//   for (let i = 0; i < arr.length - rotations; i++) {
//     rotated.push(arr[i]);
//   }

//   return rotated;
// })(originalArray, k);

// console.log(rotatedArray);


// Rotate an array by K times - anonymous 

// let originalArray = [1, 2, 3, 4, 5];
// let k = 2; // Number of rotations

// let rotateArray = function(arr, rotations) {
//   let rotated = [];

//   for (let i = arr.length - rotations; i < arr.length; i++) {
//     rotated.push(arr[i]);
//   }

//   for (let i = 0; i < arr.length - rotations; i++) {
//     rotated.push(arr[i]);
//   }

//   return rotated;
// };

// let rotatedArray = rotateArray(originalArray, k);
// console.log(rotatedArray);





/*
arrow function odd number
*/

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Using arrow function and forEach loop
// const printOddNumbers = (arr) => {
//   arr.forEach((num) => {
//     if (num % 2 !== 0) {
//       console.log(num);
//     }
//   });
// };

// printOddNumbers(numbers);



//  arrow- tostring



// const stringArray = ["apple" , "ball" , "cat"];

// // Using arrow function and map
// const convertToTitleCaps = (arr) => {
//   return arr.map((str) => {
//     return str
//       .split(" ")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//   });
// };

// const titleCapsArray = convertToTitleCaps(stringArray);
// console.log(titleCapsArray);




// arrow - sum of array


// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Using arrow function and reduce
// const sumOfNumbers = (arr) => arr.reduce((acc, num) => acc + num, 0);

// const totalSum = sumOfNumbers(numberArray);
// console.log(totalSum);

// arrow - const numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// // Using arrow function and filter
// const isPrime = (num) => {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
  
//     let i = 5;
//     while (i * i <= num) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//       i += 6;
//     }
//     return true;
//   };
  
//   const primeNumbers = numberArray.filter((num) => isPrime(num));
  
//   console.log(primeNumbers);
  



// palindrom



// const stringArray = ["racecar", "hello", "level", "world", "deified"];

// // Using arrow function and filter
// const isPalindrome = (str) => {
//   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reversedStr = cleanedStr.split("").reverse().join("");
//   return cleanedStr === reversedStr;
// };

// const palindromeArray = stringArray.filter((str) => isPalindrome(str));

// console.log(palindromeArray);





















