function validatePassword(password) {
    const minLength = 8;
    const minNumberOfDigits = 1;
    if (password.length < minLength) {
        print(`Password must be at least ${minLength} characters long.`);
        return false;
    }
    let letterCount = 0;
    for (let char of password) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            letterCount++;
        }
    }
    if (letterCount === 0) {
        print("Password must contain at least one letter.");
        return false;
    }
    
    let digitCount = 0;
    for (let char of password) {
        if (char >= '0' && char <= '9') {
            digitCount++;
        }
    }
    if (digitCount < minNumberOfDigits) {
        print(`Password must contain at least ${minNumberOfDigits} digit(s).`);
        return false;
    }
    return true;
}
module.exports = validatePassword;