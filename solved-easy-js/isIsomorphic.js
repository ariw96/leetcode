var isIsomorphic = function (s, t) {
	if (s.length !== t.length) {
		return false;
	}
	let hashMap1 = {};
	let hashMap2 = {};
	for (let i = 0; i < s.length; i++) {
		if (hashMap1[s[i]] !== hashMap2[t[i]]) {
			return [false, hashMap1];
		} else {
			hashMap1[s[i]] = i;
			hashMap2[t[i]] = i;
		}
	}
	return [hashMap1, hashMap2];
};
console.log(isIsomorphic("essssxs", "addddcd"));
