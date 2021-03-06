/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

      schema: true,

      attributes: {

          type: {
              type: 'string',
              required: true
          },
          title: {
              type: 'string',
              required: true
          },
          content: {
              type: 'string',
              required: true
          }
      }

};
