const bankDAO= require('./bankDAO');
const bankTransfer = require('./bankTransfer');

const bank = {
    getBalance(accountId) {
    return bankDAO.retrieveBalance(accountId);
    },

    async transferMoney(accountId, amount) {
        try {
        await bankTransfer.transfer(accountId, amount);
        bankDAO.debitAccount(accountId, amount);
        console.log(`Successfully transferred ${amount} from account ${accountId}`);
        } catch (error) {
            console.error('Error during transfer:', error);
        }
    }
};

module.exports = bank;