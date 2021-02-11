// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");

const testWord = "Dog Trunk";
const decodeWord = "lwo bzcvs";

describe("caesar encode()", () => {
  it("should return false when no shift is present", () => {
    const actual = caesar(testWord);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if shift is > 25", () => {
    const actual = caesar(testWord, 26);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if shift < -25", () => {
    const actual = caesar(testWord, -26 );
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should return false if shift is 0", () => {
    const actual = caesar(testWord, 0);
    const expected = false;
    expect(actual).to.equal(expected);
  });

  it("should decode a new string when encode is set to false", () => {
    const actual = caesar(decodeWord, 8, false);
    const expected = "dog trunk";
    expect(actual).to.equal(expected);
  });
  it("should decode a new string when a code is passed in", () => {
    const actual = caesar(testWord, 3);
    const expected = "grj wuxqn";
    expect(actual).to.equal(expected);
  });

  it("should decode a new string when a code is passed in", () => {
    const actual = caesar(testWord, -3);
    const expected = "ald qorkh";
    expect(actual).to.equal(expected);
  });

  it("should loop the table when a code passes 'z'", () => {
    const actual = caesar(testWord, 8);
    const expected = "lwo bzcvs";
    expect(actual).to.equal(expected);
  });
});
