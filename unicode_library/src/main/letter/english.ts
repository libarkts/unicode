import { randLetters } from './rand';

export const EnglishUpperMin = 'A';
export const EnglishUpperMax = 'Z';
export const EnglishLowerMin = 'a';
export const EnglishLowerMax = 'z';

export const EnglishUpperCount = 26;
export const EnglishLowerCount = 26;
export const EnglishCount = 52;

export const EnglishUpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const EnglishLowerLetters = "abcdefghijklmnopqrstuvwxyz";
export const EnglishLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const EnglishUpperLetterArray = EnglishUpperLetters.split('');
export const EnglishLowerLetterArray = EnglishLowerLetters.split('');
export const EnglishLetterArray = EnglishLetters.split('');

/**
 * Generates a random string of uppercase English letters.
 * @param count Number of characters to generate.
 * @returns Random uppercase English string.
 */
export function randEnglishUpper(count: number): string {
  return randLetters(EnglishUpperLetterArray, count);
}

/**
 * Generates a random string of lowercase English letters.
 * @param count Number of characters to generate.
 * @returns Random lowercase English string.
 */
export function randEnglishLower(count: number): string {
  return randLetters(EnglishLowerLetterArray, count);
}

/**
 * Generates a random string of mixed-case English letters.
 * @param count Number of characters to generate.
 * @returns Random mixed-case English string.
 */
export function randEnglish(count: number): string {
  return randLetters(EnglishLetterArray, count);
}
