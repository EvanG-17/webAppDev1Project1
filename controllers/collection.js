'use strict';

const logger = require('../utils/logger');
const movieStore = require('../models/movie-store.js');


const collection = {
  index(request, response) {
    const collectionId = request.params.id;
    logger.debug('Collection id = ' + collectionId);
    const viewData = {
      title: 'Collection',
      collection: movieStore.getCollection(collectionId),
    };
    response.render('collection', viewData);
  },
    deleteMovie(request, response) {
    const collectionsId = request.params.id;
    const movieId = request.params.movieid;
    logger.debug(`Deleting Movie ${movieId} from Collection ${collectionsId}`);
    movieStore.removeMovie(collectionsId, movieId);
    response.redirect('/collection/' + movieId);
  },
  
  addMovie(request, response) {
    const movieId = request.params.id;
    const movie = movieStore.getcollections(movieId);
    const newMovie = {
      name: request.body.name,
      director: request.body.director,
    };
    movieStore.addmovie(movieId, newMovie);
    response.redirect('/collection/' + movieId);
  },

};

module.exports = collection;