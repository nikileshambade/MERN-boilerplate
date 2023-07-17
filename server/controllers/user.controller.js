
const UserModel = require("../models/user.model");
const RoleModel = require("../models/roles.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getUser = async (req, res, next) => {
    const userId = req.params.id;
    try {
        if(userId) {
            const user = await UserModel.findById(userId);
            if(!user) {
                throw new Error(`No user found`)
            }
            return res.status(200).send(user);
        } else {
            const allUsers = await UserModel.find({}, 'userName emailId');
            return res.status(200).send(allUsers);
        }
    } catch (err) {
        next(err);
    }
}

const registerUser = async (req, res, next) => {
    const { firstName, lastName, email, password, role } = req.body;
    let userRole;

    if(role) {
        userRole = await RoleModel.findOne({ role: role });
    } else {
        userRole = await RoleModel.findOne({ role: 'USER' });
    }

    try {
        const existingUser = await UserModel.findOne({ emailId: email });
        if (existingUser) {
            throw new Error(`User already exist with email ${email}`)
        }
        const newUser = new UserModel({
            firstName: firstName,
            lastName: lastName,
            emailId: email,
            roles: userRole && userRole._id
        });
        await newUser.save();
        res.status(200).send(newUser);
    } catch (err) {
        next(err);
    }
}

const authenticate = async (req, res, next) => {
    const { emailId, password } = req.body;

    try {
        const userExist = await UserModel.findOne({ emailId: emailId }).populate('roles');
        if (!userExist) {
            throw new Error(`${emailId} doens't exist`);
        }
        const passwordMatch = await bcrypt.compare(password, userExist.password);
        if(!passwordMatch) {
            throw new Error(`Password doesn't match`);
        }
        const token = jwt.sign({ email: userExist.emailId, id: userExist._id }, process.env.SECRET_KEY);
        res.status(200).json({
            user: {
                email: userExist.emailId,
                firstName: userExist.firstName,
                lastName: userExist.lastName,
                id: userExist._id,
                roles: userExist.roles
            },
            token
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getUser,
    registerUser,
    authenticate
}