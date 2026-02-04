import mongoose from "mongoose";
const {Schema, model} = mongoose;

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        default: 'unknown'
    },
    releaseDate: {
        type: String,
        required: true
        //add in regex to validate date format YYYY-MM-DD
    },
    reviews : [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;