const express = require('express');
const rolesRouter = express.Router();
const { addRolesAndPermissions, getAllRoles } = require('../controllers/roles.controller');

rolesRouter.route('/add')
    .post(addRolesAndPermissions)

rolesRouter.route('/')
    .get(getAllRoles)

module.exports = rolesRouter;