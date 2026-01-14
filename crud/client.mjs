import { accountService } from "./accountService.mjs";
import { ACCOUNT_LIST } from "./database.mjs";


accountService.addAccount("Doe", "John");
accountService.getAccountList().forEach((account) => {
  console.log(account);
});
accountService.saveAccount(ACCOUNT_LIST[0].id, "Smith", "Jane");
accountService.getAccount(ACCOUNT_LIST[0].id);
