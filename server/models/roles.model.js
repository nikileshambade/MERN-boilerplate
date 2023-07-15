const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const rolesSchema = new Schema({
    role: { type: String, require: true},
    permissions: [String]
});

module.exports = mongoose.model('Roles', rolesSchema);