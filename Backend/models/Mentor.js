const mongoose = require('mongoose')
const { Schema } = mongoose

const MentorSchema = new Schema({
    name: { type: String, required: true },
    expertise: { type: String, required: true },
    bio: { type: String, required: true },
    image: {type: String},
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
},
    {
        timestamps: true
    }
)

// const Mentor = mongoose.model('Mentor', MentorSchema)
module.exports = mongoose.models?.Mentor || mongoose.model('Mentor', MentorSchema)