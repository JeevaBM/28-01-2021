/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true, },
    name:{ type: 'string'},
    user_name:{ type: 'string'},
    password:{ type: 'string'},
    email_id:{ type: 'string'},
    role:{ type: 'string'},
    gender:{ type: 'string'},
    school_name:{ type: 'string'},
    class_name:{ type: 'string'},
    createdAt: { type: 'string', autoCreatedAt: true, },
    updatedAt: { type: 'string', autoUpdatedAt: true, },

  },

};

