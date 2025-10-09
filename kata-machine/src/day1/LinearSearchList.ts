export default function linear_search(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++)
  {
    if (haystack[i] === needle)
    {
      console.log("verdict is true")
      return true
    }

  }
  console.log("verdict is false")
  return false
}

const needle = 4
const haystack = [54, 2, 6, 77]
linear_search(haystack, needle)
