

let nums = [33, 55, 23, 67, 105, 89]

console.log("Maximum of the given number --->" + Math.max(...nums))

let nam = "madam"
if (nam === nam.split("").reverse().join("")) {
    console.log("It is palindrome")
} else {
    console.log("Not palindrome")
}

// Print only the even numbers from the array

let numbers = [22, 44, 57, 89, 100, 110, 113, 120]
console.log(numbers.filter(e => e % 2 !== 0))

//factorial of a number
let myNum = 5

console.log(factorial(myNum))
function factorial(myNum) {


    if (myNum == 0 || myNum == 1) {
        //console.log(`factorial of the ${myNum} is 1`)
        return 1
    } else {
        return myNum * factorial(myNum - 1)
    }
}

console.log("+++++++++ Title case++++++")

function titleCase(inputString){
    return inputString.replace(/\b\w/g, l => l.toUpperCase());  
}

console.log(titleCase("ashok kumar"))
