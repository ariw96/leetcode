var mergeTwoLists = function (list1, list2) {
	let resultedList = new ListNode();
	let current = resultedList;
	while (list1 && list2) {
		if (list1.val < list2.val) {
			current.next = list1;
			list1 = list1.next;
		} else {
			current.next = list2;
			list2 = list2.next;
		}
		current = current.next;
	}
	if (list1) {
		current.next = list1;
	}
	if (list2) {
		current.next = list2;
	}
	console.log(resultedList.next);
	return resultedList.next;
};

// if (list2 === null) {
//   return list1;
// }
// if (list1.val < list2.val) {
//   list1.next = mergeTwoLists(list1.next, list2);
//   return list1;
// } else {
//   list2.next = mergeTwoLists(list1, list2.next);
//   return list2;
// }
