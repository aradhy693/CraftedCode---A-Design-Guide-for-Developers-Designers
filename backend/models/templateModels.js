const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: String,
    category: String,
    subtitle: { type: String },
    description: { type: String },
    code: { type: String },
    image: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('template', mySchema);//user is collection  name