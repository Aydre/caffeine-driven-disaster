function validatePassword(password,minArgs) {
    if(password.length < minArgs.minLength) return false;
    if((password.match(/\d/g) || []).length < minArgs.minNumbers) return false;
    if((password.match(/[a-zA-Z]/g) || []).length < minArgs.minLetters) return false;
    return true;
}

module.exports = validatePassword