const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reactionSchema = require('../modules/reaction')

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => new Date(timestamp).toISOString()
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
});
// Below is the reactionCount virtual field
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
