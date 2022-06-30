function getArray<T>(items : T[]) : T[]{
    return new Array<T>().concat(items)
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(["Hello", "World"]);

myNumArr.push(40000)
myStrArr.push("hi")

console.log(myNumArr)
console.log(myStrArr)