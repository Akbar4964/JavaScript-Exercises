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

// function findMinimum(a, b, c) {
//   if (a <= b && a <= c) {
//     return a;
//   } else if (b <= a && b <= c) {
//     return b;
//   } else {
//     return c;
//   }
// }
// const a = 1;
// const b = 3;
// const c = 5;

// const min = findMinimum(a, b, c);
// console.log("Eng kichik son: " + min);

// function findMinNumber(a, b, c, d, e) {
//   if (a <= b && a <= c && a <= d && a <= e) {
//     return a;
//   } else if (b <= a && b <= c && b <= d && b <= e) {
//     return b;
//   } else if (c <= a && c <= b && c <= d && c <= e) {
//     return c;
//   } else if (d <= a && d <= b && d <= c && d <= e) {
//     return d;
//   } else if (e <= a && e <= b && e <= c && e <= d) {
//     return e;
//   }
// }
// const minNumber = findMinNumber(10, 3, 7, 4, 7);
// console.log(minNumber);

// function getData() {
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("getData").value;
//   let t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("Hech nima yozilmagan!");
//   } else {
//     document.getElementById("dataName").appendChild(li);
//   }
// }

// const numbers = [-1, -2, -1, -3, 5, -6, -5];

// let res = numbers[0];

// numbers.forEach((el) => {
//   if (el > 0) {
//     if (res < el && res) {
//       res = res;
//     } else {
//       res = el;
//     }
//   } else if (res <= 0 && el < 0) {
//     res = 0;
//   }
//   console.log(res, el);
// });

// console.log(res);
// numbers.forEach((el) => {
//   if (el > 0) {
//     res = res < el && res ? res : el;
//   } else if (res <= 0 && el < 0) {
//     res = 0;
//   }
//   //   console.log(res, el);
// });

// console.log(res);

// const people = [
//   {
//     name: "Akbar",
//     surname: "Shuhratullayev",
//     age: 17,
//   },
//   {
//     name: "Samir",
//     surname: "Abrorov",
//     age: 17,
//   },
//   {
//     name: "Abdulaziz",
//     surname: "Qodirov",
//     age: 18,
//   },
// ];
// for (const key in people) {
//   console.log(key, people[key]);
// }

// const colors = ["oq", "qora", "yashil"];
// for (const idx in colors) {
//   console.log(idx, colors[idx]);
// }

// const people = [
//   {
//     name: "Akbar",
//     surname: "Shuhratullayev",
//     age: 17,
//   },
//   {
//     name: "Samir",
//     surname: "Abrorov",
//     age: 17,
//   },
//   {
//     name: "Abdulaziz",
//     surname: "Qodirov",
//     age: 18,
//   },
// ];
// for (const key of people) {
//   console.log(key);
// }

// const colors = ["oq", "qora", "yashil"];
// for (const idx of colors) {
//   console.log(idx);
// }

// const objects = {
//   name: "Olma",
//   price: 10000,
// };
// for (const key in objects) {
// console.log(key,objects[key])
// }

// const fruits = [
//   {
//     name: "Olma",
//     price: 10000,
//   },
//   {
//     name: "Banan",
//     price: 10000,
//   },
//   {
//     name: "Olcha",
//     price: 1000,
//   },
// ];

// let res = 0;

// for (const items of fruits) {
//   //   const res = items.price + 410000

//   res = res + items.price;

//   //   console.log(res);
// }

// console.log(res);

// res = 1;

// console.log(res);

// function findLargestOddElement(array) {
//   let largestOdd = 0;
//   let index = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0 && array[i] > largestOdd) {
//       largestOdd = array[i];
//       index = i;
//     }
//   }
//   if (largestOdd === 0) {
//     return 0;
//   } else {
//     return [largestOdd, index];
//   }
// }
// const numbers = [2, 4, 6, 8, 10, 24, 100, 12, 20];
// console.log(findLargestOddElement(numbers));

// const arr = [4, 3, 1, 2, 5];
// const result = arr.every((item) => item === 1);
// console.log(result);

// const result2 = arr.some((item) => item === 2);
// // console.log(result2);

// const result3 = arr.reverse();
// // console.log(result3);

// const result4 = arr.sort();
// // console.log(result4);

// const number = [
//   {
//     name: "Zarina",
//     age: 21,
//   },
//   {
//     name: "Bahodir",
//     age: 15,
//   },
//   {
//     name: "Begzod",
//     age: 27,
//   },
//   {
//     name: "ahmat",
//     age: 27,
//   },
//   {
//     name: "Alisher",
//     age: 40,
//   },
// ];
// const res = number.sort((a, b) => {
//   if (a.age > b.age) return 1;
//   else if (a.age < b.age) return -1;
//   else return 0;
// });

// const res2 = number.sort((a, b) => {
//   if (a.name > b.name) return 1;
//   else if (a.name < b.name) return -1;
//   else return 0;
// });

// const res3 = number.sort((a, b) => {
//   const name1 = a.name.toLocaleLowerCase();
//   const name2 = b.name.toLocaleLowerCase();

//   if (name1 > name2) return 1;
//   else if (name1 < name2) return -1;
//   else return 0;
// });

// const res4 = number.sort((a, b) => a.name.localeCompare(b.name));
// // console.log(res4);

// let arrStr = arr.join("");

// console.log(typeof arrStr);

// const newArr = [1, 2, [3, 4], [5, 6]]; // [1,2,3,4.5]
// const newArr2 = [1, 2, [3, 4, [4, [5, [15]]]], [5, 6]]; // [4, [5, [15]]]

// const flatArr = newArr.flat();
// const flatArr2 = newArr2.flat(Infinity);

// console.log(flatArr2);

// function findLargestOddElement(array) {
//   let largestOdd = 0;
//   let index = 0;
//   for (let i in numbers) {
//     if (array[i] % 2 !== 0 && array[i] > largestOdd) {
//       largestOdd = array[i];
//       index = i;
//     }
//   }
//   if (largestOdd === 0) {
//     return 0;
//   } else {
//     return [largestOdd, index];
//   }
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(findLargestOddElement(numbers));

// function findLargestOddElement(array) {
//   let largestOdd = 0;
//   let index = 0;
//   //   console.log(array);
//   for (let i of numbers) {
//     console.log(i);
//     if (array[i] % 2 !== 0 && array[i] > largestOdd) {
//       largestOdd = array[i];
//       index = i;
//     }
//   }
//   if (largestOdd === 0) {
//     return 0;
//   } else {
//     return [largestOdd, index];
//   }
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10];
// for (let i in numbers) {
//   console.log(i);
// }
// console.log(findLargestOddElement(numbers));

// function findLargestOddElement(array) {
//   const [largestOdd, index] = array.reduce(
//     (acc, value, idx) => {
//       if (value % 2 !== 0 && value > acc[0]) {
//         return [value, idx];
//       }
//       return acc;
//     },
//     [0, 0]
//   );

//   if (largestOdd === 0) {
//     return 0;
//   } else {
//     return [largestOdd, index];
//   }
// }




