const retrieveBalance= require('./bankDAO');
const bank = {};

function getBalance(bank, accountId) {
    retrieveBalance(bank,accountId);
}

getBalance(bank, 12345);

module.exports = getBalance;