import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";

export const accountCommandDAO = {
    insertAccount(account) {
        ACCOUNT_LIST.push(account);
        console.log("Account inserted:", account);
      },
    updateAccount(account) {
        const index = ACCOUNT_LIST.findIndex((acc) => acc.id === account.id);
        if (index !== -1) {
          ACCOUNT_LIST[index] = account;
          console.log("Account updated:", account);
        }
      },
    
};
