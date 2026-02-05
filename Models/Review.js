import mongoose from "mongoose";
const {Schema, model} = mongoose;

const reviewSchema = new mongoose.Schema({
    movieId: {
        type: Schema.Types.ObjectId, ref: 'Movie', 
        required: true
    },
    reviewer: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    reviewDate: {
        type: String,
        required: true
        //add in regex to validate date format YYYY-MM-DD
    },
    reviewComment: {
        type: String
    },
    reviewScore:{
        type: Number,
        required: true,
        //don't allow decimals
        min:[1, 'Must be at least 1'],
        max:[5, 'Must be 5 or lower']
    }
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;