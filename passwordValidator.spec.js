const validatePassword = require('./passwordValidator');

const minArgs = {
    minLength: 8,
    minNumbers: 1,
    minLetters: 1
};

test('password of less than 8 characters is invalid', () => {
    const wrongPassword = 'abc';
    const validPassword = 'abcd1234';
    expect(validatePassword(wrongPassword, minArgs)).toBe(false);
    expect(validatePassword(validPassword, minArgs)).toBe(true);
});

test('password with less than 1 number is invalid', () => {
    const wrongPassword = 'abcdefgh';
    const validPassword = 'abcdaaa4';
    expect(validatePassword(wrongPassword, minArgs)).toBe(false);
    expect(validatePassword(validPassword, minArgs)).toBe(true);
});

test('password with less than a letter is invalid', () => {
    const wrongPassword = '12345678';
    const validPassword = 'a2345678';
    expect(validatePassword(wrongPassword, minArgs)).toBe(false);
    expect(validatePassword(validPassword, minArgs)).toBe(true);
});