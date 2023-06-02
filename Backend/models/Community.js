const mongoose = require('mongoose')
const { Schema } = mongoose

const CommunitySchema = new Schema({ 
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
)

// const Community = mongoose.model('Community', CommunitySchema)
module.exports = mongoose.models?.Community || mongoose.model('Community', CommunitySchema)