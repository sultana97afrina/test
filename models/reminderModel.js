const model_mongoose = require('mongoose');

let reminderModel = model_mongoose.model('reminder_model_collection',
{
    name:{ type: String},
    email: { type: String},
    date: {type:String},
    description: {type: String}
});

module.exports = reminderModel;