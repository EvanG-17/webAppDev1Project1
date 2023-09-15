'use strict';

const _ = require('lodash');

const movieStore = {

  // import the movie collection object
  movieCollection: require('./movie-store.json').movieCollection,

  // function to get all of the collections
  getAllCollections() {
    return this.movieCollection;
  },
  
   getCollection(id) {
    return _.find(this.movieCollection, { id: id });
   },
  
    removeMovie(id, movieId) {
    const collection = this.getCollection(id);
      _.remove(collection.movies, {id: movieId});
  },
    addMovie(id, movie) {
    const collection = this.getMovie(id);
    collection.movie.push(movie);
  },
  
  removeCollections(id) {
  _.remove(this.movieCollection, { id: id });
},
  
};

// export the movieStore object so it can be used elsewhere
module.exports = movieStore;