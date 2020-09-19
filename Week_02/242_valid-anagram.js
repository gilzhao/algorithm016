/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	const hash = new Array(26).fill(0);
	const codeA = 'a'.charCodeAt();
	const length = s.length;
	for (let i = 0; i < length; i++) {
		hash(s.charCodeAt(i) - codeA)++;
		hash(t.charCodeAt(i) - codeA)--;
	}

	for (let value of hash) {
		if (value !== 0) return false;
	}

	return true;
};
