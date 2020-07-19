async function getRandomModel(modelName){
    const model = require('./../../../models/' + modelName);
    const count = await model.count({});

    const rand = Math.floor(Math.random() * count);

    const models = await model.find({});

    return models[rand];
}

module.exports = getRandomModel

