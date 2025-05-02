const mongoose = require('mongoose');

const connectToMongo = async () => {
    return await mongoose.connect("mongodb://127.0.0.1:27017/ToDos")
        .then(() => console.log("Connected with Mongo DB"))
        .catch(() => console.log("Something went wrong"));
}

const todoSchema = new mongoose.Schema({
    title: String, description: String, completed: Boolean
}, { timestamps: true })

const ToDo = mongoose.model("ToDo", todoSchema);

module.exports = {
    connectToMongo, ToDo
}