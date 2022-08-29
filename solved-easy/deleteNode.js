var deleteNode = function (node) {
	while (listHead.val != null)
		if (listHead.val > x) {
			temp = listHead.val;
			listHead.val = null;
			listHead.val.next = temp;
		}
};
