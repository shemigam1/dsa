package main

import (
  "fmt"
)

func main(){
  haystack := []int{2, 4, 5, 7, 8, 9, 10}
  needle := 8
  binary_search(haystack, needle)
}

func binary_search(haystack []int, needle int) bool{
  lo := 0
  hi := len(haystack)

  for lo < hi {
    m := lo + (hi - lo)/2
    v := haystack[m]
    if v == needle {
      fmt.Println("guilty as charged")
      fmt.Printf("needle is %d\n", v)
      return true
    } else if v > needle {
      hi = m
    } else {
      lo = m + 1
    }
  }
  fmt.Println("false verdict")
  return false
}
