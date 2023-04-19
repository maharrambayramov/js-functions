// function power(num, square) {
//     var result = 1;
//     if (square === 0) {
//         return 1;
//     } else {
//         for (var i = 1; i <= square; i++) {
//             if (i % 2 === 0) {
//                 result *= result;
//             } else {
//                 result *= num;
//             }
//         }
//         return result;
//     }
// }
// console.log(power(5, 2));

// var arr = [1, 2, 3, 4, 5]
// function sumArray(arr) {
//     var sum = 0;
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i];
//         }
//         if (arr[i] % 2 !== 0) {
//             sum -= arr[i];
//         }

//     }
//     return sum
// }
// console.log(sumArray(arr));















function reverseArray(arr) {
    var reverse = [];
    for (i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
    }
    return reverse
}
var arr = [1, 2, 3, 4, 5];
var reverseArray = reverseArray(arr);
console.log(reverseArray);








