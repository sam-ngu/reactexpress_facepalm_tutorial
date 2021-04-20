const faker = require("faker");
const Post = require("./../../models/Post");
const User = require("./../../models/User");
const getRandomModel = require("./helper/getRandomModel");

async function seedData() {
    // delete everything inside db
    Post.collection.deleteMany();

    // for loop to generate X amount of records in my db

    console.log('creating post');
    for (let index = 0; index < 50; index++) {

        const randomUser = await getRandomModel("User");

        const post = new Post({
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraph(),
            user_id: randomUser._id
        });

        post.save();
    }
}

module.exports = seedData;
