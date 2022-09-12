# https://leetcode.com/problems/middle-of-the-linked-list/?envType=study-plan&id=level-1
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = fast = head
        while fast and fast.next: 
            slow = slow.next
            fast = fast.next.next
        return slow

            
        