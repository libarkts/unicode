import { EnglishUpperMin, EnglishUpperMax, EnglishLowerMin, EnglishLowerMax } from './english';
import { GreekUpperMin, GreekUpperMax, GreekLowerMin, GreekLowerMax } from './greek';

/**
 * Checks if a character is an uppercase English letter.
 * @param char The character to check.
 * @returns True if the character is an uppercase English letter, false otherwise.
 */
export function isEnglishUpper(char: string): boolean {
  return char >= EnglishUpperMin && char <= EnglishUpperMax;
}

/**
 * Checks if a character is a lowercase English letter.
 * @param char The character to check.
 * @returns True if the character is a lowercase English letter, false otherwise.
 */
export function isEnglishLower(char: string): boolean {
  return char >= EnglishLowerMin && char <= EnglishLowerMax;
}

/**
 * Checks if a character is an English letter (either uppercase or lowercase).
 * @param char The character to check.
 * @returns True if the character is an English letter, false otherwise.
 */
export function isEnglish(char: string): boolean {
  return isEnglishUpper(char) || isEnglishLower(char);
}

/**
 * Checks if a character is an uppercase Greek letter.
 * @param char The character to check.
 * @returns True if the character is an uppercase Greek letter, false otherwise.
 */
export function isGreekUpper(char: string): boolean {
  return char >= GreekUpperMin && char <= GreekUpperMax;
}

/**
 * Checks if a character is a lowercase Greek letter.
 * @param char The character to check.
 * @returns True if the character is a lowercase Greek letter, false otherwise.
 */
export function isGreekLower(char: string): boolean {
  return char >= GreekLowerMin && char <= GreekLowerMax;
}

/**
 * Checks if a character is a Greek letter (either uppercase or lowercase).
 * @param char The character to check.
 * @returns True if the character is a Greek letter, false otherwise.
 */
export function isGreek(char: string): boolean {
  return isGreekUpper(char) || isGreekLower(char);
}
