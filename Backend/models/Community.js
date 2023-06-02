const mongoose = require('mongoose')
const { Schema } = mongoose

const CommunitySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    queryTitle: {
        type: String,
        required: true,
    },
    queryDescription: {
        type: String,
        required: true
    },
    queryViews: {
        type: Number,
        default: 0
    },
    queryLikes: {
        type: Number,
        default: 0
    }
},
    {
        timestamps: true
    }
)

// const Community = mongoose.model('Community', CommunitySchema)
module.exports = mongoose.models?.Community || mongoose.model('Community', CommunitySchema)