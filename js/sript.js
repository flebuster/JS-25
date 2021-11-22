let sortWords = ["Google", "Apple", "Microsoft"]

// 1,1

// function compare(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// console.log(sortWords.sort(compare));

// 1,2

let compare = sortWords.sort(function(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
})
console.log(compare);

// 2
function f(num, length) {
    let arrayOfMultiples = []
    for (let i = 0; i <= length; i++) {
        arrayOfMultiples.push(num * (i + 1))
        }
        return arrayOfMultiples
}
console.log(f(7, 5));

// 3
let arr = [1, -3, -4];

function absVal(elem) {
    return elem < 0 ? -elem : elem;
}
arr = arr.reduce(function (sum, elem) {
    return sum += absVal(elem)
})

console.log(arr);
