# https://leetcode.com/problems/merge-two-sorted-lists/?envType=study-plan&id=level-1
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        cur = dummy = listNode()
        while list1 and list2:
            if list1.val < list2.val: 
                cur.next = list1
                list1 = list1.next
                cur = list1
            else:
                cur.next = list2
                list2 = list2.next
                cur = list2
                