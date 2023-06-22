import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    FirstName : {
        type: String,
        required : [true, "Please provide unique Firstname"],
    },
    LastName : {
        type: String,
        required : [true, "Please provide unique Lastname"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique : false,
    },
    email: {
        type: String,
        required : [true, "Please provide a unique email"],
        unique: true,
    },
    mobile : { type : Number},
    address: { type: String},
    profile: { type: String}
});

export default mongoose.model.Users || mongoose.model('User', UserSchema);