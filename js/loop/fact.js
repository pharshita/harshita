let n = 5
function factorial(n){
    if(n == 0 || n == 1){
        return 1

    }
    else
    {
        return n * factorial(n-1)
    }
}
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer)