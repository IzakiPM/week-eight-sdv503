// Create a function that takes two numbers and multiplies the result, if the result is > than 20, print it if not return 10 

const equation = function(a,b) {
    let timesBY = a * b 
    let result = timesBY * 5
    if (result > 20) {
        return result
    } else
    if (result < 20) {
        return 10
    }
}

console.log(equation(1,1))