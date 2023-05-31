import mongoose from "mongoose";

 export const UserSchema = new mongoose.Schema({
    fullname: {type: String, required: true, unique: true},
    emailaddress: {type: String, required: true, unique: true},
    contact: {type: String, required: true},
    emergencycontact: {type: String, required: true},
    shirtsize: {type: String, required: true},
    address: {type: String, required: true, unique: true},
    comment: {type: String, required: true},
});

export const UserModel = mongoose.model("student", UserSchema);