// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const abc = "abcdefghijklmnopqrstuvwxyz".split("");
  const sub = "xoyqmcgrukswaflnthdjpzibev".split("");
  const word = "hello";

  function subCode(input, alphabet, abc) {
    let newAlph = [];
    const newLet = input.toLowerCase().split("");
    for (let letter of newLet) {
      if (letter === " ") {
        newAlph.push(" ");
      } else {
        const index = abc.indexOf(letter);
        const match = alphabet[index];
        newAlph.push(match);
      }
    }
    return newAlph.join("");
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const everything = [...new Set(alphabet)];
    if (!alphabet || everything.length !== 26) {
      return false;
    }
    if (encode) {
      return subCode(input, alphabet, abc);
    } else {
      return subCode(input, abc, alphabet);
    }
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
