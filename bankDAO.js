const BankDAO ={
retrieveBalance(accountId) {
    console.log('Retrieve balance');
},

debitAccount(accountId, amount) {
    console.log('Debit account');
}
}

module.exports = BankDAO;