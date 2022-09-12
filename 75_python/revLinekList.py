# https://leetcode.com/problems/reverse-linked-list/?envType=study-plan&id=level-1
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None 
        while head:
            cur = head
            head = head.next
            cur.next = prev
            prev = cur

        return prev    
        