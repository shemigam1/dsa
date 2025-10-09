#!/usr/bin/python3

def isPalindrome(s):
        """
        :type s: str
        :rtype: bool
        """
        clean_str = ''.join(char for char in s if char.isalnum())
        print(clean_str, '----------clean')
        reverse_str = ''.join(reversed(clean_str))
        print(reverse_str, '----------reverse')
        if clean_str == reverse_str:
            return True
        else:
            return False

print(isPalindrome("race a car"))
print(isPalindrome(" "))
print(isPalindrome("A man, a plan, a canal: Panama")
