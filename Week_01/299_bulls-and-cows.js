/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
	let x = (y = 0);
	let hash = Array(10).fill(0);

	for (let i = 0, len = secret.length; i < len; i++) {
		if (secret[i] === guess[i]) {
			x++;
		} else {
			if (hash[secret[i]]++ < 0) y++;
			if (hash[guess[i]]-- > 0) y++;
		}
	}

	return `${x}A${y}B`;
};
