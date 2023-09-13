// let a = prompt("Enter a first number:");
// let b = prompt("Enter a second number:");

// document.write(Number(a) + Number(b));

// const day = prompt("Enter a number from 1 to 7");
// if (day == 1) {
//   console.log("Dushanba");
// } else if (day == 2) {
//   console.log("Seshanba");
// } else if (day == 3) {
//   console.log("Chorshanba");
// } else if (day == 4) {
//   console.log("Payshanba");
// } else if (day == 5) {
//   console.log("Juma");
// } else if (day == 6) {
//   console.log("Shanba");
// } else if (day == 7) {
//   console.log("Yakshanba");
// } else {
//   console.log("Bunday kun yo'q");
// }

// function result(num1, num2, num3) {
//   let number = 0;
//   if (num1 > 0) {
//     number++;
//   }
//   if (num2 > 0) {
//     number++;
//   }
//   if (num3 > 0) {
//     number++;
//   }
//   return number;
// }
// let numbers = result(1, -2, 3);
// console.log(numbers);

// let number = 0;
// const a = prompt("Enter a number:");
// const b = prompt("Enter a number:");
// const c = prompt("Enter a number:");
// if (a > 0) {
//   number++;
// }
// if (b > 0) {
//   number++;
// }
// if (c > 0) {
//   number++;
// }
// console.log(number);

// const a = prompt("Enter a number:");
// const b = prompt("Enter a number:");
// const c = prompt("Enter a number:");

function findMinimum(numbers) {
  let minimum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  }
  return minimum;
}

// let numbers = [3, 7, 2, 9, 5];
let minimumNumber = findMinimum(numbers);
console.log("Eng kichik son: " + minimumNumber);

const numbers = [1, 2, 3];
let min = 0;
if (numbers < min) {
  min = numbers;
}
