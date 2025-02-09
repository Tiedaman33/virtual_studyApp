const mongoose = require ('mongoose'); //import mongoose

//connect to the database

const connectDB = async () => {

    try{
        await mongoose.connect('mongodb://localhost:27017/virtual-study-group');

        console.log('MongoDB connected');
    }
    catch(err) {
        console.log('MongoDB connection error');
        process.exit(1);
    }
        }
     export default connectDB