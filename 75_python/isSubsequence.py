# https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) > len(t): return False
        if len(s) == 0: return True
        index =0 
        for i in range(len(t)):
            if s[index] == t[i]:
                index += 1


        return index == len(s)