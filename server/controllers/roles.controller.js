const RolesModel = require('../models/roles.model');

const addRolesAndPermissions = async (req, res, next) => {
    const { role, permissions } = req.body
    try {
        const existingRole = await RolesModel.findOne({ role: role })
        if (existingRole) { 
            return res.status(400).json({ message: `${role} role already exist`});
        }
        const newRole = new RolesModel({
            role: role,
            permissions: permissions
        });
        await newRole.save();
        res.send(newRole);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    addRolesAndPermissions
}