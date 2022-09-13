# https://leetcode.com/problems/linked-list-cycle-ii/?envType=study-plan&id=level-1
class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow,fast = head,head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if fast == slow:
                return slow
        return None        