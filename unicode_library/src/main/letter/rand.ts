/**
 * Helper function to generate a random string of letters from a given character array.
 * @param letters Array of characters to choose from.
 * @param count Number of characters to generate.
 * @returns Random string of the specified length.
 */
export function randLetters(letters: string[], count: number): string {
  let result = '';
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    result += letters[randomIndex];
  }
  return result;
}
