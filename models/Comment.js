const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        body: { type: String, required: true },
        user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
        post_id: { type: Schema.Types.ObjectId, ref: "Post" , required: true},
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true, // to include virtual properties in json response
        },
    }
);

commentSchema.virtual("user", {
    ref: "User",
    localField: "user_id",
    foreignField: "_id",
    justOne: true,
});

commentSchema.virtual("post", {
    ref: "Post",
    localField: "post_id",
    foreignField: "_id",
    justOne: true,
});


const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment; 