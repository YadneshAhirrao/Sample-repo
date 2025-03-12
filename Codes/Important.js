/*
    /[^\w]/g

    ^       → Negates the character set (matches anything except what follows).
    \w      → Matches word characters (letters A-Z, a-z, digits 0-9, and underscore _).
    [^\w]   → Matches any character that is NOT a word character (like spaces, punctuation, symbols).
    g       → Global flag (applies to the entire string, not just the first match).

*/
str1 = "Hello, World!";
console.log(str1.replace(/[^\w]/g, ""));

/* 
    /\s/g

    \s  → Matches any whitespace character (spaces, tabs, newlines, etc.).
    g   → Global flag, ensures it replaces all occurrences, not just the first.

*/
str2 = "Hello, Wor ld!";
console.log(str2.replace(/\s/g, ""));

/* 
    .split('')  → Converts the string into an array of characters.
    .sort()     → Sorts the array of characters alphabetically (in ascending order).
    .join('')   → Joins the sorted array back into a single string.
    .splice(startIndex, deleteCount, item1, item2, ...);
*/
str3 = "Hello,World!";
console.log(str3.split('').sort().join(''));
