export function pointsForWord(word) {
  if (typeof word !== "string") throw new Error("Input must be a string");

  let points = 0;

  // Only process letter characters (a–z)
  for (const char of word.toLowerCase()) {
    if (!/[a-z]/.test(char)) continue; // ignore non-letters

    if (/[aeiou]/.test(char)) {
      points += 1; // vowel (1 point)
    } else {
      points += 2; // consonant (2 points)
    }
  }

  return points;
}