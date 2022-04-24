const { Schema, model } = require('mongoose');


const peopleSchema = Schema({
    
    userId: {
          type: String,
          required: true,
        },
    people: {
        type: String,
       
        minlength: 3,
        maxlenth: 100,
    },

    relation: {
        type: String,
 
    },
    relationshipPerson: {
        type: String,
       
        minlength: 3,
        maxlenth: 100,
 
    },


}, { timestamps: true });





module.exports.People = model('People', peopleSchema);
