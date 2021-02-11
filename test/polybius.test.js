// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");
const testWord = "thinkful";

describe("polybius encode", () => {
  it("should return a number when 'Thinkful' is passed in", () => {
    const actual = polybius(testWord);
    const expected = "4432423352125413";
    expect(actual).to.equal(expected);
  });

  it("should return a number when 'Hello World' is passed in", () => {
    const actual = polybius("Hello World");
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });

  it("should return 'hello world' when a number is passed in", () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = "hello world";
    expect(actual).to.equal(expected);
  });
});
