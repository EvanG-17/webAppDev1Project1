'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();

// import controllers
const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const collection = require('./controllers/collection.js');

// connect routes to controllers
router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/collection/:id', collection.index);
router.get('/collection/:id/deleteMovie/:movieid', collection.deleteMovie);
router.get('/dashboard/deletecollections/:id', dashboard.deleteCollections);
router.post('/collection/:id/addmovie', collection.addmovie);




// export router module
module.exports = router;