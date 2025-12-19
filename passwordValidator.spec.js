const validatePassword = require('./passwordValidator');
const wrongLengthPasswords = "a"*7;
const validLengthPasswords = "a"*8;

test('password with less than 8 characters should be invalid', () => {
    const result = validatePassword(wrongLengthPasswords);
    expect(result).toBe(false);
}
);

test('password with 8 or more characters should be valid', () => {
    const result = validatePassword(validLengthPasswords);
    expect(result).toBe(true);
});
