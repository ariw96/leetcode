function binarySearch(arr, value, startPos, endPos) {
	if (startPos > endPos) return -1;

	let middleIndex = Math.floor(startPos + endPos) / 2;

	if (arr[middleIndex] === value) return middleIndex;
	else if (arr[middleIndex > value]) {
		return binarySearch(arr, value, startPos, middleIndex - 1);
	} else {
		return binarySearch(arr, value, middleIndex + 1, endPos);
	}
}
