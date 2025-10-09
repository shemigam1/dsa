// recursive function for fibonecci
function fibonecci(n) {
    if (n <= 1) {
        return n;
    }
    // console.log(n);
    return fibonecci(n - 1) + fibonecci(n - 2);
}
console.log(fibonecci(5));
