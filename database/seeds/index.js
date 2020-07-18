const connectDb = require('./../../config/database');
const userSeeder = require('./userSeeder');
const postSeeder = require('./postSeeder');
const commentSeeder = require('./commentSeeder');
// connected to DB
connectDb();


async function seed(){
    // will run all the seeder files

    await userSeeder();
    await postSeeder();
    await commentSeeder();
}

seed()

