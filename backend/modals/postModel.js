import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
    },
    text: {
        type: String,
        maxLength: 500,
    },
    img: {
        type: String,
        default: ""
    },
    likes: [
        {
            userId: {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
            },
            username: {
                type: String
            },
            userProfilePic: {
                type: String
            }
        }
    ],
    replies: [
        {
            userId: {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
            },
            text: {
                type: String,
                required: true
            },
            username: {
                type: String
            },
            userProfilePic: {
                type: String
            }
        }
]
}, {
    timestamps: true,
})

const Post = mongoose.model('Post', postSchema)

export default Post;