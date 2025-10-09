#!/usr/bin/python3

class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        mapping = {
            
        }
        for index in nums:
            if index in mapping:
                mapping[index] += 1
            else:
                mapping[index] = 1
        mapping_items = list(mapping.items())
        sorted_map = sorted(mapping_items, key=lambda item: item[1], reverse=True)

        top_k = []
        for i in range(k):
            if i < len(sorted_map):
                num = sorted_map[i][0]
                freq = sorted_map[i][1]
                top_k.append(num)
            else:
                break
        print(top_k)
        return top_k

sol = Solution()
sol.topKFrequent([1,1,1,1,1,2,2,2], 2)
