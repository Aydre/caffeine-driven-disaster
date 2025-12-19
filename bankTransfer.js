const bankTransfer ={
transfer(accountId, amount) {
    return new Promise((resolve, reject) => {
        resolve(`Transferred ${amount} to account ${accountId}`);
    });
}
}
module.exports = bankTransfer;