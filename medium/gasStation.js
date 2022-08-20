var canCompleteCircuit = function (gas, cost) {
	let total = 0;
	let start = 0;
	let sum = 0;
	cost = cost.slice(1) + cost.slice(0, 1);

	for (let i = 0; i < gas.length; i++) {
		total += gas[i] - cost[i];
		sum += gas[i] - cost[i];
		if (sum < 0) {
			sum = 0;
			start = i + 1;
		}
	}

	return total >= 0 ? start : -1;
};
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([4, 4, 1, 5, 1], [5, 1, 2, 3, 4]));
// https://leetcode.com/problems/gas-station/
