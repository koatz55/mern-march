const mongoose = require('mongoose');
// convention is pascal-case
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchLine: {
        type: String
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
