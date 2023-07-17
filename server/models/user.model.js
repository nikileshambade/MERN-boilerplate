const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { Schema, model } = mongoose;
const RolesModel = require('./roles.model');

const userSchema = new Schema({
    firstName: { type: String, require: true },
    lastName: { type: String },
    emailId: { type: String, require: true },
    password: { type: String, require: true },
    createdDate: { type: Date, default: Date.now},
    updatedDate: { type: Date, default: Date.now},
    roles: [{ type: Schema.Types.ObjectId, ref: 'Roles'}]
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