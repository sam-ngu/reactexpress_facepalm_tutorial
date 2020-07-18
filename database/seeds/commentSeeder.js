const faker = require("faker");
const Comment = require("./../../models/Comment");
const Post = require("./../../models/Post");
const User = require("./../../models/User");
const getRandomModel = require('./helper/getRandomModel');

async function seedData() {


    // delete everything inside db
    Comment.collection.deleteMany();

    // for loop to generate X amount of records in my db

    console.log("creating comment");
    for (let index = 0; index < 30; index++) {
        
        const randomUser = await getRandomModel("User")
        const randomPost = await getRandomModel("Post")

        const comment = new Comment({
            body: faker.lorem.paragraph(),
            user_id: randomUser._id,
            post_id: randomPost._id,
        });

        comment.save();
    }
}

module.exports = seedData;
