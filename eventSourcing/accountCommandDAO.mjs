import { ACCOUNT_LIST } from "./database.mjs";
import { eventStore } from "./eventStore.mjs";
import { Account } from "./account.mjs";

export const accountCommandDAO = {
    insertAccount(account) {
        ACCOUNT_LIST.push(account);
        console.log("Contenu de la base de données :");
        console.log(ACCOUNT_LIST);
    },
    updateAccount(account) {
        const index = ACCOUNT_LIST.findIndex(a => a.id === account.id);
        ACCOUNT_LIST[index] = account;
        console.log("Contenu mis à jour :");
        console.log(ACCOUNT_LIST);
    },
    restore(id) {
    const events = eventStore.eventList
        .filter(e => e.accountId === id)
        .sort((a, b) => a.creationDate - b.creationDate);

    return events.reduce((account, event) => {
        if (event.name === "AccountCreated") {
            return new Account(event.accountId, event.payload.lastName, event.payload.firstName, event.creationDate);
        }
        if (event.name === "AccountUpdated" && account) {
            account.lastName = event.payload.lastName;
            account.firstName = event.payload.firstName;
        return account;
        }
    return account;
  }, null);
}
};