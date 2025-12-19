const bankDAO = require('./bankDAO');
const bank = require('./bank');
const bankTransfer = require('./bankTransfer');

const accountId = 12345;
const ammount = 1000;
const error = new Error('Transfer failed');

afterEach(() => {
    jest.restoreAllMocks();
});

test('retrieveBalance is called', () => {
    jest.spyOn(bankDAO, 'retrieveBalance');
    bank.getBalance(accountId);
    expect(bankDAO.retrieveBalance).toHaveBeenCalled();
});

test('Account ID is passed in parameter', () => {
    jest.spyOn(bankDAO, 'retrieveBalance');
    bank.getBalance(accountId);
    expect(bankDAO.retrieveBalance).toHaveBeenCalledWith(accountId);
});

test('returns the balance retrieved from the DAO', () => {
    jest.spyOn(bankDAO, 'retrieveBalance').mockReturnValue(ammount);
    expect(bank.getBalance(accountId)).toBe(ammount);
});

test('transferMoney calls transfer with correct parameters', async () => {
    jest.spyOn(bankTransfer, 'transfer');
    await bank.transferMoney(accountId, ammount);
    expect(bankTransfer.transfer).toHaveBeenCalledWith(accountId, ammount);
});

test('transferMoney calls debitAccount with correct parameters', async () => {
    jest.spyOn(bankDAO, 'debitAccount');
    await bank.transferMoney(accountId, ammount);
    expect(bankDAO.debitAccount).toHaveBeenCalledWith(accountId, ammount);
});

test('transfert fails and debitAccount is not called', async () => {
    jest.spyOn(bankDAO, 'debitAccount');
    jest.spyOn(bankTransfer, 'transfer').mockRejectedValue(error);
    await bank.transferMoney(accountId, ammount);
    expect(bankDAO.debitAccount).not.toHaveBeenCalled();
});