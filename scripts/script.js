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

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
