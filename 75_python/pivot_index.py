        
        # https://leetcode.com/problems/find-pivot-index/
from turtle import right


class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        left = 0
        length = len(nums)
        right = length
        sum_left = 0
        sum_right = 0
        for i in range (length):
           sum_right += nums[i]


        for i in range (length):
          if (sum_left == sum_right - nums[i+1] ) return nums[i+1]
