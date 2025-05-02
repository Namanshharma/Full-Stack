const mongoose = require('mongoose');
const { boolean } = require('zod');

const connectToMongo = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/ToDos").then(() => console.log("Connected with Mongo DB")).catch(() => console.log("Something went wrong"));
}

const todoSchema = new mongoose.Schema({
    title: String, description: String, completed: boolean
}, { timestamps: true })

const ToDo = mongoose.model("ToDo", todoSchema);

module.exports = {
    connectToMongo, ToDo
}