import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,

    },
    // username: {
    //     type: String,
    //     trim: true,
    //     default: null
    // },
    // avatar:
    // {
    //     data: Buffer,
    //     contentType: String,

    // },
    dob:
    {
        type: Date,
        default: null

    },
    firstName:
    {
        type: String,
        default: null
    },
    lastName:
    {
        type: String,
        default: null
    },
    age:
    {
        type: Number,
        default: null
    },
    pageId:
    {
        type : [String],
        default : null
    }

})

export default mongoose.model("user_detail", userSchema);

