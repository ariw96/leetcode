var permute = function (nums) {
	let result = [];
	let length = 0
	if (length === 0) return [];
	if (length === 1) return [nums];
	for(let i = 0; i< length; i++){
		const curNum = nums[i]
		const remainNums = nums.slice(0,i).concat(i+1)
		const remainNumsPremute = permute(remainNums)
		for(let j = 0; j < remainNumsPremute.length; j++ ){
			result.push([curNum,...])
		}
	}
	
	return result
};
// https://leetcode.com/problems/permutations
