const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: { type: String, required: true },
        body: { type: String, required: true },
        user_id: { type: Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

// few relation (embbed) 

// array of Object ID (quite a bit)

// Reference ( A LOT )  -- more robust
