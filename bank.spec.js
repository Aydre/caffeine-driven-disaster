jest.mock('./bankDAO');
const mockRetrieveBalance = require('./bankDAO');
const getBalance = require('./bank');


test('retrieveBalance is called', () => {
    getBalance({});
    expect(mockRetrieveBalance).toHaveBeenCalled();
});

test('Account ID is passed in parameter', () => {
    const accountId = 12345;
    getBalance({}, accountId);
    expect(mockRetrieveBalance).toHaveBeenCalledWith({}, accountId);
});