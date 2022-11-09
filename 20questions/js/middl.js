// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// 1 - version
const getMiddle = (s) => {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
};

// 2 - version
const getMiddle2 = (s) => s.slice((s.length -1)/2, s.length/2+1
)

function isInfiniteProcess(a, b) {
	return a % 2 != b % 2 || a > b
}