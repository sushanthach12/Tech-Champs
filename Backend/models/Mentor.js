const mongoose = require('mongoose')
const { Schema } = mongoose

const MentorSchema = new Schema({
    name: { type: String, required: true },
    expertise: { type: String, required: true },
    bio: { type: String, required: true },
    contactInfo: {
        email: {
            type: String,
            required: true
        },
    },
},
    {
        timestamps: true
    }
)

// const Mentor = mongoose.model('Mentor', MentorSchema)
module.exports = mongoose.models?.Mentor || mongoose.model('Mentor', MentorSchema)