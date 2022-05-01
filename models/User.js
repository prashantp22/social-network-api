const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique:true,
        required: 'Username is required',
        trim:true,
    },
    email: {
        type: String,
        unique: true,
        required: 'Please enter a valid email address',
        match: [/^[a-zA-z0-9]+@([a-zA-z0-9]+\.)+[a-zA-z0-9]{2,3}$/, 'Enter a valid Email address'],
    },
    thoughts:[
        {
            type:Schema.Types.ObjectId,
            ref: "Thought",
        }
    ],
    friends:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ]
})

const User = model('User', userSchema);

module.exports = User;