import mongoose from "mongoose";

export const EarlySchema = new mongoose.Schema({
    FirstName : {
        type: String,
        required : [true, "Please provide unique Firstname"],
    },
    LastName : {
        type: String,
        required : [true, "Please provide unique Lastname"],
    },
    email: {
        type: String,
        required : [true, "Please provide a unique email"],
        unique: true,
    },
    type: {
        type: String,
    },
});

export default mongoose.model.Earls || mongoose.model('Earl', EarlySchema);