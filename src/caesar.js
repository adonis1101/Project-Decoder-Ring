// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

function splitWord(word) {
  const letters = [];
  for (let i = 0; i < word.length; i++) {
    const newLet = word.charCodeAt(i);
    letters.push(newLet);
  }
  return letters;
}

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    let newArr = []
    // your solution code here
    if (!shift || shift > 25 || shift < -25 || 0) {
      return false;
    }
    if (encode === false) {
      shift *= -1;
    }
    const newWord = splitWord(input.toLowerCase());
    const result = newWord.map((letter) => {
      if (letter < 97 || letter > 122) {
        return String.fromCharCode(letter);
      }
      letter += shift;

      if (letter > 122) {
        const newTest2 = letter - 26;
        return String.fromCharCode(newTest2);
      }
      if (letter < 97) {
        const shortLet = letter + 26;
        return String.fromCharCode(shortLet);
      } else {
        return String.fromCharCode(letter);
      }
    });

    return result.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;