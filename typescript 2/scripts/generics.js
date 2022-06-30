"use strict";
function getArray(items) {
    return new Array().concat(items);
}
let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);
myNumArr.push(40000);
myStrArr.push("hi");
console.log(myNumArr);
console.log(myStrArr);
