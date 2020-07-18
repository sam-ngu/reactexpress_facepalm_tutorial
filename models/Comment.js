const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        body: { type: String, required: true },
        user_id: { type: Schema.Types.ObjectId, ref: "User" },
        post_id: { type: Schema.Types.ObjectId, ref: "Post" },
    },
    { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment; 