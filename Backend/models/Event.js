
const mongoose = require('mongoose')
const { Schema } = mongoose

const MentorSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: new Date("YYYY-mm-dd"), required: true },
    location: { type: String, required: true },

},
    {
        timestamps: true
    }
)

// const Mentor = mongoose.model('Mentor', MentorSchema)
module.exports = mongoose.models?.Mentor || mongoose.model('Mentor', MentorSchema)