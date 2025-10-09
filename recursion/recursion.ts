// recursive function for fibonecci

function fibonecci(n: number): number {
    if (n <= 1) {
        return n
    }
    // console.log(n);


    return fibonecci(n - 1) + fibonecci(n - 2)
}

console.log(fibonecci(5))

function sumOfNaturalNumbers(n: number): number {
    if (n === 1) {
        return 1
    }
    return n + sumOfNaturalNumbers(n - 1)
}