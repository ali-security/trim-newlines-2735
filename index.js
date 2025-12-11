'use strict';

module.exports = string => {
	const trimmed = module.exports.start(string);
	return module.exports.end(trimmed);
};

module.exports.start = string => {
	let start = 0;
	const end = string.length;

	while (start < end && (string[start] === '\r' || string[start] === '\n')) {
		start++;
	}

	return start > 0 ? string.slice(start, end) : string;
};

module.exports.end = string => {
	let end = string.length;

	while (end > 0 && (string[end - 1] === '\r' || string[end - 1] === '\n')) {
		end--;
	}

	return end < string.length ? string.slice(0, end) : string;
};
