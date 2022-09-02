        
        # https://leetcode.com/problems/find-pivot-index/
from turtle import left, right


class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        total = sum(nums)
        leftSum = 0
        for i in range(len(nums)):
             total = total - nums[i+1]
             if leftSum == total:
                return i 

        return -1        


