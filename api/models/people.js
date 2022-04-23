const { Schema, model } = require('mongoose');


const peopleSchema = Schema({
    people: {
        type: String,
        unique: true,
        minlength: 3,
        maxlenth: 100,
    },


}, { timestamps: true });





module.exports.People = model('People', peopleSchema);
