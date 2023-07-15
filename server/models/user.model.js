const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { Schema, model } = mongoose;
const RolesModel = require('./roles.model');

const userSchema = new Schema({
    userName: { type: String, require: true },
    emailId: { type: String },
    password: { type: String, require: true },
    createdDate: { type: Date, default: Date.now},
    updatedDate: { type: Date, default: Date.now},
    roles: [RolesModel.schema]
});

userSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword =  await bcrypt.hash(this.password, salt);
        this.password = hashPassword;
        next();
    } catch (error) {
        next(error)
    }
});

module.exports = mongoose.model('User', userSchema);