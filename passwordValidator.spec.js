const validatePassword = require('./passwordValidator');
const wrongLengthPasswords = "a"*7;
const validLengthPasswords = "aaaaaaa1";
const wrongDigitPasswords = "abcdefgh";
const validDigitPasswords = "abcd3fgh";
const wrongLetterPasswords = "12345678";
const validLetterPasswords = "a0012345";

test('password with less than 8 characters should be invalid', () => {
    const result = validatePassword(wrongLengthPasswords);
    expect(result).toBe(false);
}
);

test('password with 8 or more characters should be valid', () => {
    const result = validatePassword(validLengthPasswords);
    expect(result).toBe(true);
});

test('password with no digits should be invalid', () => {
    const result = validatePassword(wrongDigitPasswords);
    expect(result).toBe(false);
}
);

test('password with at least one digit should be valid', () => {
    const result = validatePassword(validDigitPasswords);
    expect(result).toBe(true);
});

test('password with no letter should be invalid', () => {
    const result = validatePassword(wrongLetterPasswords);
    expect(result).toBe(false)
})

test('password with at least one letter should be valid', () => {
    const result = validatePassword(validLetterPasswords);
    expect(result).toBe(true)
})