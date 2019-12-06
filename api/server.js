const express = require('express');

const actionsRouter = require('../routers/actions-router.js');

const projectsRouter = require('../routers/projects-router.js');

const Actions = require('../data/helpers/actionModel.js');

const Projects = require('../data/helpers/projectModel.js');

const server = express();

server.use('/api/actions', actionsRouter);

server.use('/api/projects', projectsRouter);

module.exports = server;
