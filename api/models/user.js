const { Schema, model } = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const userSchema = Schema({
   
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },


}, { timestamps: true });

userSchema.methods.generateJWT = function () {
    const token = jwt.sign({
        _id: this._id,
   
        email: this.email,

        
    }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
    return token;
}

const validateUser = user => {
    const schema = Joi.object({

        email: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(user);
}

module.exports.User = model('User', userSchema);
module.exports.validate = validateUser;