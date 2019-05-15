function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomString(len) {
  let str = '';
  for (let i = 0; i < len; i++) {
    const code = getRandomNumber(65, 90);
    str += String.fromCharCode(code);
  }
  return str;
}

function zeroPad(str, len) {
  return `${str}`.padStart(len, '0');
}

function isPrime(num) {
  if (num < 1) {
    return false;
  } else if (num <= 3) {
    return true;
  } else if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false
    }
    i += 6
  }
  return true
}

function arrayRange(min, max) {
  return (new Array(max - min + 1).fill(0).map((item, idx) => min + idx));
}

// =======================================================
// =======================================================

function answer1() {
  // for (let i = 1; i <= 7; i++) {
  //   let str = '';
  //   for (let j = 1; j <= i; j++) {
  //     str += '#';
  //   }
  //   console.log(str);
  // }
  for (let i = 1; i <= 7; i++) {
    console.log('Integrify 💩'.repeat(i));
   
    
  }
}

// =======================================================

function answer2() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, 'FizzBuzz');
    } else if (i % 3 === 0) {
      console.log(i, 'Fizz');
    } else if (i % 5 === 0) {
      console.log(i, 'Buzz');
    }
  }
}

// =======================================================

function findMax() {
  const arr = [...arguments];
  let biggest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  return biggest;
}

function answer3() {
  const biggestNumber = findMax(1, 3, 4, 5, 6, 4, 30, 20);
  console.log('Biggest number is:', biggestNumber);
}

// =======================================================

function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function answer4() {
  const reversed = reverseArray([1, 2, 3]);
  console.log('Reversed array is: ', reversed);
}


// =======================================================

function modifyArray(arr) {
  if (arr.length < 5) {
    return 'Not Found';
  }
  return arr.map((item, index) => {
    if (index === 4) {
      return item.toUpperCase();
    }
    return item;
  })
}

function answer5() {
  console.log(modifyArray(['One', 'Two', 'Three', 'Microsoft', 'APPLE', 'Blah blah', 'Damn']));
}

// =======================================================

// function generateRandomDigit() {
//   return Math.round(Math.random() * 9);
// }

function answer6() {
  const numbers = [];
  while (numbers.length < 7) {
    const randomNum = getRandomNumber(0, 9);
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  console.log(numbers);
}

// =======================================================

function sum(...arr) {
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i]
  // }
  // return sum

  // const sum = arr.reduce((final, item) => {
  //   return final + item;
  // }, 0);
  // return sum;

  return arr.reduce((final, item) => final + item, 0);
}

/* 
  final = 0
  item = 1

  final = 1
  item = 2

  final = 3
  item = 3

  final = 6
  item = 4

  final = 10
*/

function answer7() {
  const sumOfNumbers = sum(1, 2, 3, 4);
  console.log('Sum is', sumOfNumbers);
}

// =======================================================

function removeMiddleItem(arr, ...replacement) {
  // Remove 1 from middle:
  // const midPointIndex = Math.floor((arr.length - 1) / 2);
  // arr.splice(midPointIndex, 1, ...replacement);
  // return arr;

  // Remove 2 from middle:
  const midPointIndex = (arr.length - 1) / 2;
  const howManyToRemove = Math.floor(midPointIndex) !== Math.ceil(midPointIndex) ? 2 : 1;
  arr.splice(Math.floor(midPointIndex), howManyToRemove, ...replacement);
  return arr;
}

function answer8() {
  console.log(removeMiddleItem([1, 2, 3], 4, 5, 6));
  console.log(removeMiddleItem([1, 2, 3, 4], 4, 5, 6));
}

// =======================================================

function answer9() {
  const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
  const numbers = text.match(/[\d]+/g).map(num => Number(num));
  const [salary, annualBonus, courses] = numbers;
  // const salary = numbers[0];
  // const annualBonus = numbers[1];
  // const courses = numbers[2];
  const yearlyIncome = salary * 12 + annualBonus + courses * 12;

  console.log('Yearly income: ', yearlyIncome);
}

// =======================================================

function yourFunc(str1, str2) {
  return str1.endsWith(str2);
}

function answer10() {
  console.log(yourFunc("integrity", "ity"))
  console.log(yourFunc("integration", "tio"))
  console.log(yourFunc("connection", "sion"))
  console.log(yourFunc("connection", "tion"))
}

// =======================================================
// =======================================================
// =======================================================
// =======================================================

function genCarPlateNum() {
  console.log(`${getRandomString(3)}-${getRandomNumber(100, 999)}`);
}

function getSocialSecurityNum() {
  const dd = zeroPad(getRandomNumber(1, 31), 2);
  const mm = zeroPad(getRandomNumber(1, 12), 2);
  const yy = zeroPad(getRandomNumber(0, 99), 2);
  const key = getRandomNumber(100, 999);
  const hash = getRandomString(1);
  console.log(`${dd}${mm}${yy}-${key}${hash}`);
}

// =======================================================

function primeDetect() {
  const range = arrayRange(0, 100);
  const primes = range.filter(num => isPrime(num));
  console.log(primes);
}

primeDetect();