# unicode

![License](https://img.shields.io/badge/license-Apache2.0-green)

This TypeScript library provides utilities for handling various Unicode characters, including English and Greek letters, numbers, and other Unicode character sets.

## 🚀 Install

```
ohpm install unicode
```

## Modules

### Letter Module

The letter module provides utilities for handling English and Greek letters.

- **Random Generation**: Generate random strings of English or Greek letters (uppercase, lowercase, or mixed).
- **Character Checks**: Check if characters are uppercase, lowercase, or belong to specific languages (English or Greek).
- **Contains Functions**: Check if a string contains specific types of letters.

## Usage

### Random Character Generation

Generate random strings of English or Greek letters.

```typescript
console.log(randEnglishUpper(5)); // Example output: "BCDFG"
console.log(randGreekLower(5));   // Example output: "αβγδε"
console.log(randGreek(5));        // Example output: "ΑβΓΔε"
```

### Character Checks

Check if individual characters belong to specific sets (English, Greek, or numbers).

```typescript
import { isEnglishUpper, isGreekLower, isDigit } from 'unicode-character-utility/src/main/letter/check';
import { isDigit } from 'unicode-character-utility/src/main/number/check';

console.log(isEnglishUpper('A')); // Output: true
console.log(isGreekLower('ω'));   // Output: true
console.log(isDigit('5'));        // Output: true
console.log(isDigit('a'));        // Output: false
```

### Contains Functions

Check if a string contains specific types of characters, such as Greek letters or digits.

```typescript
import { containsEnglishUpper, containsGreek, containsDigit } from 'unicode-character-utility/src/main/letter/contains';
import { containsDigit } from 'unicode-character-utility/src/main/number/contains';

console.log(containsEnglishUpper("Hello World")); // Output: true
console.log(containsGreek("Αλφαβητική σειρά"));    // Output: true
console.log(containsDigit("12345"));              // Output: true
console.log(containsDigit("abc"));                // Output: false
```
