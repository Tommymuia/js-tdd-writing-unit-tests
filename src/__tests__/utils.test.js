import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const points = pointsForWord("test"); // t(2) + e(1) + s(2) + t(2) = 7
    expect(points).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    const points = pointsForWord("tEsT"); // t(2) + E(1) + s(2) + T(2) = 7
    expect(points).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    const points = pointsForWord("");
    expect(points).toBe(0);
  });

  it("ignores non-letter characters", () => {
    const points = pointsForWord("t3st!"); // t(2) + s(2) + t(2) = 6. '3' and '!' ignored.
    // 💡 FIX: The expected score for "t3st!" is 6, not 7.
    expect(points).toBe(6);
  });

  it("handles words with only vowels", () => {
    const points = pointsForWord("aeiou"); // 5 * 1 = 5
    expect(points).toBe(5);
  });

  it("handles words with only consonants", () => {
    const points = pointsForWord("bcdf"); // 4 * 2 = 8
    expect(points).toBe(8);
  });

  it("throws an error if input is not a string", () => {
    expect(() => pointsForWord(123)).toThrow("Input must be a string");
  });
});