
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getUser = async (req, res, next) => {
    const userId = req.params.id;
    try {
        if(userId) {
            const user = await UserModel.findById(userId);
            if(!user) {
                return res.send("No user found")
            }
            return res.send(user);
        } else {
            const allUsers = await UserModel.find({}, 'userName emailId');
            return res.send(allUsers);
        }
    } catch (err) {
        next(err);
    }
}

const registerUser = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await UserModel.findOne({ emailId: email })
        if (existingUser) { 
            return res.staus(400).json({ message: `User already exist with email ${email}`})
        }
        const newUser = new UserModel({
            userName: username,
            emailId: email,
            password: password,
        });
        await newUser.save();
        res.send(newUser);
    } catch (err) {
        next(err);
    }
}

const authenticate = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const userExist = await UserModel.findOne({ userName: username })
        if (!userExist) { 
            return res.send(`Username doens't exist`);
        }
        const passwordMatch = await bcrypt.compare(password, userExist.password);
        if(!passwordMatch) {
            return res.send(`Password doesn't match`);
        }
        const token = jwt.sign({ email: userExist.emailId, id: userExist._id }, process.env.SECRET_KEY);
        res.status(200).json({
            user: {
                email: userExist.emailId,
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