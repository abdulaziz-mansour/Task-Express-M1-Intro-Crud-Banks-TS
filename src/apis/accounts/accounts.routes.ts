import { Router } from "express";
import { createAccounts, getAllAccounts, updateAccount, deleteAccount } from "./accounts.controllers";

const accountsRouter = Router();

accountsRouter.put("/:accountId", updateAccount);
accountsRouter.get("/", getAllAccounts);
accountsRouter.delete("/:accountId", deleteAccount);
accountsRouter.post("/", createAccounts);

export default accountsRouter;