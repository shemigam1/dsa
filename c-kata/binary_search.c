#include "main.h"

/**
 * binary_search - implementation of binary search algorithm
 * @haystack - array of ints
 * @size- size of array
 * @needle - number to find
 *
 * Return: bool
 */


void main()
{
  int haystack[] = {3, 5, 7, 12, 17};
  int needle = 12;
  binary_search(haystack, 5, needle);
}

bool binary_search(int *haystack, int size, int needle)
{
  int lo = 0;
  int hi = size;

  do
  {
    int m = lo + (hi - lo)/2;
    int v = haystack[m];

    if (v == needle)
    {
      printf("verdict is true, needle is %d", v);
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);

  printf("verdict is false");
  return false;
}
