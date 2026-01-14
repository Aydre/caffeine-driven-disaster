import { ACCOUNT_LIST } from "./database.mjs";
import { queryDatabase } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountQueryDAO = {
    retrieveAccountList() {
        return queryDatabase.accountSummaryList;
      },
    retrieveAccount(id) {
        /*const account = ACCOUNT_LIST.find((acc) => acc.id === id);
        if (account) {
          const { lastName, firstName, ...rest } = account;
          const result = { ...rest, name : `${firstName} ${lastName}` };
          console.log("Account retrieved:", result);
          return result;
        }
        console.log("Account not found with id:", id);
        return null;
      },*/
      const cached = accountCache[id];
      if (cached) {
            console.log("Account retrieved from cache:", cached);
            return cached;
        }
        console.log("Account not found with id:", id);
        return null;
      },
};
