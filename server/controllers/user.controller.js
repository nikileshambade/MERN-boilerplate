
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const getUser = async (req, res, next) => {
    const userId = req.params.id;
    try {
        if(userId) {
            const user = await User.findById(userId);
            if(!user) {
                return res.send("No user found")
            }
            return res.send(user);
        } else {
            const allUsers = await User.find({}, 'userName emailId');
            return res.send(allUsers);
        }
    } catch (err) {
        next(err);
    }
}

const registerUser = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ emailId: email })
        if (existingUser) { 
            return res.send(`User already exist with email ${email}`)
        }
        const newUser = new User({
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

const authenticate = async (req, res) => {
    const { username, password } = req.body;

    try {
        const userExist = await User.findOne({ userName: username })
        if (!userExist) { 
            return res.send(`Username doens't exist`);
        }
        const passwordMatch = await bcrypt.compare(password, userExist.password);
        if(!passwordMatch) {
            return res.send(`Password doesn't match`);
        }
        res.send({
            message: 'user authenticated'
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