const express = require('express');
const rolesRouter = express.Router();
const { addRolesAndPermissions } = require('../controllers/roles.controller');

rolesRouter.route('/add')
    .post(addRolesAndPermissions)

module.exports = rolesRouter;