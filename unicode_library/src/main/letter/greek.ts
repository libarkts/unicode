import { randLetters } from './rand';

export const GreekUpperMin = 'Α';
export const GreekUpperMax = 'Ω';
export const GreekLowerMin = 'α';
export const GreekLowerMax = 'ω';

export const GreekUpperCount = 24;
export const GreekLowerCount = 24;
export const GreekCount = 48;

export const GreekUpperLetters = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";
export const GreekLowerLetters = "αβγδεζηθικλμνξοπρστυφχψω";
export const GreekLetters = "αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";

// Split strings into character arrays
export const GreekUpperLetterArray = GreekUpperLetters.split('');
export const GreekLowerLetterArray = GreekLowerLetters.split('');
export const GreekLetterArray = GreekLetters.split('');

/**
 * Generates a random string of uppercase Greek letters.
 * @param count Number of characters to generate.
 * @returns Random uppercase Greek string.
 */
export function randGreekUpper(count: number): string {
  return randLetters(GreekUpperLetterArray, count);
}

/**
 * Generates a random string of lowercase Greek letters.
 * @param count Number of characters to generate.
 * @returns Random lowercase Greek string.
 */
export function randGreekLower(count: number): string {
  return randLetters(GreekLowerLetterArray, count);
}

/**
 * Generates a random string of mixed-case Greek letters.
 * @param count Number of characters to generate.
 * @returns Random mixed-case Greek string.
 */
export function randGreek(count: number): string {
  return randLetters(GreekLetterArray, count);
}
