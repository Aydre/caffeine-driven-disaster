import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log("Account inserted:", account);
  },
  retrieveAccountList() {
    return ACCOUNT_LIST.map(({creationDate, ...rest}) => rest);
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex((acc) => acc.id === account.id);
    if (index !== -1) {
      ACCOUNT_LIST[index] = account;
      console.log("Account updated:", account);
    }
  },
  retrieveAccount(id) {
    const account = ACCOUNT_LIST.find((acc) => acc.id === id);
    if (account) {
      const { lastName, firstName, ...rest } = account;
      const result = { ...rest, name : `${firstName} ${lastName}` };
      console.log("Account retrieved:", result);
      return result;
    }
    console.log("Account not found with id:", id);
    return null;
  },
};
