// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  return horizontalJoin.includes(word) ? true : false; // ternary operator
};


module.exports = wordSearch;

// Pair programming Selene Grossett & Suliman Fayyaz