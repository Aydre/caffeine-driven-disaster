function validatePassword(password) {
    const minLength = 8;
    if (password.length < minLength) {
        print(`Password must be at least ${minLength} characters long.`);
        return false;
    }
    return true;
}
module.exports = validatePassword;