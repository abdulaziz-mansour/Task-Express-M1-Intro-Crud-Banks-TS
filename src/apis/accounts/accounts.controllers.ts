import { Request, Response } from "express";
import { accounts } from "../../../data/accounts";
import Account from "../../models/accounts";

const getAllAccounts = async (req: Request, res: Response) => {
    try {
        const allAccounts = await Account.find();
        res.status(200).json({ message: "Found all accounts", data: allAccounts });
    } catch (error) {
        res.status(500).json({ errorMsg: error });
    }
};

const updateAccount = async (req: Request, res: Response) => {
    try {
        const { accountId } = req.params;
        const accountFound = await Account.findById(accountId);
        if (accountFound) {
            res.json({ message: "Account has been fetched", data: accountFound });
        } else {
            res.status(404).json({ message: "Account has not been found" });
        }
    } catch (error) {
        res.status(500).json({ errorMsg: error });
    }
};

const deleteAccount = async (req: Request, res: Response) => {
    try {
        const { accountId } = req.params;
        const accountFound = await Account.findByIdAndDelete(accountId);
        if (!accountFound) {
            res.status(404).json({ message: "Account not found" });
        }
        res.status(200).json("Account has been deleted");
    } catch (error) {
        res.status(500).json({ errorMsg: error });
    }
};



const createAccounts = async (req: Request, res: Response) => {
    try {
        const { username, funds } = req.body;
        const newAccount = await Account.create({
            // id: id,
            username: username,
            funds: funds,
        });
        res.status(201).json({
            message: "Account has been created successfully",
            account: newAccount,
        });
    } catch (error) {
        console.log(error);
    }
};

export { getAllAccounts, createAccounts, updateAccount, deleteAccount };