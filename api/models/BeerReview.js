/**
 * BeerReview.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    aroma: {
      type: 'float'
    },
    appearance: {
      type: 'float'
    },
    taste: {
      type: 'float'
    },
    sensation: {
      type: 'float'
    },
    set: {
      type: 'float'
    }
  }
};

