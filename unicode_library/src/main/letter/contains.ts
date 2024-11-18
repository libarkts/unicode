import { isEnglishUpper, isEnglishLower, isEnglish, isGreekUpper, isGreekLower, isGreek } from './is';

/**
 * Checks if any character in the string satisfies the given predicate.
 * @param str The string to check.
 * @param predicate A function that takes a character and returns a boolean.
 * @returns True if any character in the string satisfies the predicate, false otherwise.
 */
export function contains(str: string, predicate: (char: string) => boolean): boolean {
  for (const char of str) {
    if (predicate(char)) {
      return true;
    }
  }
  return false;
}

/**
 * Checks if the string contains any uppercase English letters.
 * @param str The string to check.
 * @returns True if any character in the string is an uppercase English letter, false otherwise.
 */
export function containsEnglishUpper(str: string): boolean {
  return contains(str, isEnglishUpper);
}

/**
 * Checks if the string contains any lowercase English letters.
 * @param str The string to check.
 * @returns True if any character in the string is a lowercase English letter, false otherwise.
 */
export function containsEnglishLower(str: string): boolean {
  return contains(str, isEnglishLower);
}

/**
 * Checks if the string contains any English letters (either uppercase or lowercase).
 * @param str The string to check.
 * @returns True if any character in the string is an English letter, false otherwise.
 */
export function containsEnglish(str: string): boolean {
  return contains(str, isEnglish);
}

/**
 * Checks if the string contains any uppercase Greek letters.
 * @param str The string to check.
 * @returns True if any character in the string is an uppercase Greek letter, false otherwise.
 */
export function containsGreekUpper(str: string): boolean {
  return contains(str, isGreekUpper);
}

/**
 * Checks if the string contains any lowercase Greek letters.
 * @param str The string to check.
 * @returns True if any character in the string is a lowercase Greek letter, false otherwise.
 */
export function containsGreekLower(str: string): boolean {
  return contains(str, isGreekLower);
}

/**
 * Checks if the string contains any Greek letters (either uppercase or lowercase).
 * @param str The string to check.
 * @returns True if any character in the string is a Greek letter, false otherwise.
 */
export function containsGreek(str: string): boolean {
  return contains(str, isGreek);
}
