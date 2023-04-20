
//task 1

function power(num, square) {
    var result = 1;
    if (square === 0) {
        return 1;
    } else {
        for (var i = 1; i <= square; i++) {
            if (i % 2 === 0) {
                result *= result;
            } else {
                result *= num;
            }
        }
        return result;
    }
}
console.log(power(5, 2));


//task 2
var arr = [1, 2, 3, 4, 5]
function sumArray(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
        if (arr[i] % 2 !== 0) {
            sum -= arr[i];
        }

    }
    return sum
}
console.log(sumArray(arr))


//task 3
var arr = [321, 15, 1098]
function sum(arr) {
    var num = 0
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] >= 100 && arr[i] <= 999)

            num += arr[i];

        if (arr[i] >= 0 && arr[i] < 100)

            num -= arr[i]
        if (arr[i] >= 999)
            num -= arr[i]
    }

    return num
}
console.log(sum(arr));


//task 4

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


//task 5

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let result = [];

for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
        result.push(arr1[i]);
    }
}

console.log(result);







