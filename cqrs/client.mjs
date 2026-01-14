import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";
import { ACCOUNT_LIST } from "./database.mjs";

accountCommand.addAccount("Doe", "John");
accountQuery.getAccountList().forEach((account) => {
  console.log(account);
});
accountCommand.saveAccount(ACCOUNT_LIST[0].id, "Smith", "Jane");
accountQuery.getAccount(ACCOUNT_LIST[0].id);