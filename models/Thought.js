const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormate');

const ReactionSchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment _id
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
  
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );

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
    reactions:[ReactionSchema]
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