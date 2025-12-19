const bankDAO = require('./bankDAO');
const bank = require('./bank');

const accountId = 12345;

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
    const expectedBalance = 1000;
    jest.spyOn(bankDAO, 'retrieveBalance').mockReturnValue(expectedBalance);
    expect(bank.getBalance(accountId)).toBe(expectedBalance);
});