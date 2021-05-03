const model_mongoose = require('mongoose');

let UserModel = model_mongoose.model('user_model_collection',
{
    name:{ type: String},
    email: { type: String},
    date: {type:Date},
    description: {type: String}
});

module.exports = UserModel;