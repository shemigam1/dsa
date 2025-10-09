export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0
  let high = haystack.length

  do {

    let mid = Math.floor(low + (high - low)/2)
    if (needle === haystack[mid]) {
        console.log("needle is ", haystack[mid])
        return true
      } else if (needle <  haystack[mid]) {
        high = mid
      } else {
        low = mid + 1
      }
  } while (low < high)
  console.log("false verdict")
  return false

}

const haystack = [2, 4, 6, 8, 10, 15, 16]
const needle = 15
bs_list(haystack, needle)
