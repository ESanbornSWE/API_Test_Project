import mongoose from "mongoose";
const {Schema, model} = mongoose;

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    reviews:{
        type: Array,
        default: []
    }
});

const User = mongoose.model('User', userSchema);
export default User;

//[{ type: Schema.Types.ObjectId, ref: 'Review' }]