const mongoose = require('mongoose')
const addSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
	  },
	people : {
        type : String,
    },
	relation : {
        type : String,
    },
	relationshipPerson : {
        type : String,
    },

})

const Add = mongoose.model('Add',addSchema)

module.exports = Add