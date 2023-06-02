const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log('Already connected');
            return;
        }
        await mongoose.connect(`${process.env.MONGODB_URI}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Mongo connected')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB