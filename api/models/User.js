/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	
    username: {
  		type: 'string',
  		required: true,
  		unique: true
  	},
  	email: {
  		type: 'string',
  		required: true,
  		//unique: true
  	},
  	password: {
  		type: 'string',
  		required: true
  	},
    confirmId: {
      type: 'string',
      unique: true
    },
    isConfirmed: {
      type: 'boolean'
    }
  }
};

