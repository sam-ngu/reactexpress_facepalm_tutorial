const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require('./Comment');

const postSchema = new Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    { 
        timestamps: true,
        toJSON: {
            virtuals: true, // to include virtual properties in json response
        }
     }
);

// we want to load the user resource in a virtual field
// to be populated later on
postSchema.virtual('user', {
    ref: "User",
    localField: 'user_id',
    foreignField: '_id',
    justOne: true
})


const Post = mongoose.model("Post", postSchema);



module.exports = Post;

// few relation (embbed) 

// array of Object ID (quite a bit)

// Reference ( A LOT )  -- more robust
