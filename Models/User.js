import mongoose from "mongoose";
const {Schema, model} = mongoose;

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    reviews:[{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

const User = mongoose.model('User', userSchema);
export default User;