const mongoose = require('mongoose')
const { Schema } = mongoose

const WorkshopSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: new Date("YYYY-mm-dd"), required: true },
    location: { type: String, required: true },
    registrationLink: { type: String, required: true },
},
    {
        timestamps: true
    }
)

// const Workshop = mongoose.model('Workshop', WorkshopSchema)
module.exports = mongoose.models?.Workshop || mongoose.model('Workshop', WorkshopSchema)