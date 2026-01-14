import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountQueryDAO } from "./accountQueryDAO.mjs";
import { queryDatabase } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs"; 

export const accountCommand = {
    addAccount(lastName, firstName) {
        const account = new Account(null,lastName, firstName);
        accountCommandDAO.insertAccount(account);
        queryDatabase.accountSummaryList.push({id: account.id, firstName: account.firstName, lastName: account.lastName});
        accountCache[account.id] = {name: `${firstName} ${lastName}`};
      },
    saveAccount(id, lastName, firstName) {
        const account = accountQueryDAO.retrieveAccountList().find((acc) => acc.id === id);
        if (account) {
          account.lastName = lastName;
          account.firstName = firstName;
          accountCommandDAO.updateAccount(account);
          const summary = queryDatabase.accountSummaryList.find((sum) => sum.id === id);
          if (summary) {
            summary.lastName = lastName;
            summary.firstName = firstName;
          }
          accountCommandDAO.updateAccount(summary);
          const cached = accountCache[id];
            if (cached) {
                cached.name = `${firstName} ${lastName}`;
            }
            accountCommandDAO.updateAccount(cached);
        }
      },
    
};
