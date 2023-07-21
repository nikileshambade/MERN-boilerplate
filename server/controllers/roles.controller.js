const RolesModel = require('../models/roles.model');

const addRolesAndPermissions = async (req, res, next) => {
    const { role, permissions } = req.body
    try {
        const existingRole = await RolesModel.findOne({ role: role })
        if (existingRole) { 
            throw new Error(`${role} role already exist`);
        }
        const newRole = new RolesModel({
            role: role,
            permissions: permissions
        });
        await newRole.save();
        res.status(200).send(newRole);
    } catch (error) {
        next(error);
    }
}

const getAllRoles = async (req, res, next) => {
    try {
        const allRoles = await RolesModel.find({});
        res.status(200).send(allRoles);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addRolesAndPermissions,
    getAllRoles
}