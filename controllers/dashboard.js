'use strict';

// import all required modules
const logger = require('../utils/logger');
const movieStore = require('../models/movie-store.js');

// create dashboard object
const dashboard = {

  // index method - responsible for creating and rendering the view
  index(request, response) {

    // display confirmation message in log
    logger.info('dashboard rendering');

    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Movie Collection App Dashboard',
      collections: movieStore.getAllCollections(),
    };

    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.collections);
    response.render('dashboard', viewData);
  },
  
    deleteCollections(request, response) {
    const collectionsId = request.params.id;
    logger.debug(`Deleting Collections ${collectionsId}`);
    movieStore.removeCollections(collectionsId);
    response.redirect('/dashboard');
  },
};

// export the dashboard module
module.exports = dashboard;