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

function sum(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }

}
console.log(sum(5));
