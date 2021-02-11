// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

const testWord = "thinkful";

describe("substitution encode", () => {
  it("should encode an input when a string is passed in", () => {
    const actual = substitution(testWord,"xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces when a spaces are passed in", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });

  it("should decode the input when a coded string is passed in", () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });

  it("should return false if all the characters in the alphabet parameter are not unique", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz", false);
    const expected = false;
    expect(actual).to.equal(expected);
  });
 
  it("should return false if alphabet is not 26 characters", () => {
    const actual = substitution("thinkful", "short", false);
    const expected = false;
    expect(actual).to.equal(expected);
  });

});