import mongoose, { Schema, model } from "mongoose";

const accountSchema = new Schema({
    // id: { type: Number, required: true },
    username: { type: String, required: true },
    funds: { type: Number, required: true },
});

const Account = model("Account", accountSchema);

export default Account;