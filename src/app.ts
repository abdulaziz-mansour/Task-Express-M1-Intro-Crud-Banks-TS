import express from "express";
import connectDB from "./database"
import accountsRouter from "./apis/accounts/accounts.routes";

const app = express();
const Port = 8000;

app.use(express.json());

app.use("/accounts", accountsRouter);

connectDB();
app.listen(Port, () => { });

