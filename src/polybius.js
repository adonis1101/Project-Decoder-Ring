// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const key = {
    horizontal: {
      1: ["a", "b", "c", "d", "e"],
      2: ["f", "g", "h", "i", "j", "k"],
      3: ["l", "m", "n", "o", "p"],
      4: ["q", "r", "s", "t", "u"],
      5: ["v", "w", "x", "y", "z"],
    },

    vertical: {
      1: ["a", "f", "l", "q", "v"],
      2: ["b", "g", "m", "r", "w"],
      3: ["c", "h", "n", "s", "x"],
      4: ["d", "i", "j", "o", "t", "y"],
      5: ["e", "k", "p", "u", "z"],
    },
  };

  const encoder = (input) =>
    input
      .split("")
      .map((char) => {
        if (char === " ") {
          return " ";
        } else {
          newChar = char.toLowerCase();
          for (let num in key.horizontal) {
            if (key["horizontal"][num].includes(newChar)) {
              for (let number in key.vertical) {
                if (key["vertical"][number].includes(newChar)) {
                  return number + num;
                }
              }
            }
          }
        }
      })
      .join("");

  const decoder = (input) =>
    input
      .match(/\s|[1-5]{1,2}/g)
      .map((char) => {
        if (char === " ") {
          return " ";
        } else if (char === "42") {
          return "(i/j)";
        } else {
          const id = char.split("");
          let index = parseInt(id[1]) - 1;
          if (id[0] === "4") {
            if (index > 1) {
              index += 1;
            }
            return key.vertical[id[0]][index];
          }
          return key.vertical[id[0]][index];
        }
      })
      .join("");

  function polybius(input, encode = true) {
    // your solution code here
    console.log(encoder(input));
    if (encode) {
      return encoder(input);
    } else if (input.split(" ").join("").length % 2 === 0) {
      return decoder(input);
    } else {
      return false;
    }
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
