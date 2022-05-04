const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormate');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username:{
        type: String,
        required:true,
        trim:true
    },
    reactions:[]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;