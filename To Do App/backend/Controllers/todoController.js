const zod = require('zod');
const { postCompleteSchema } = require('../types');

const createToDoHandler = async (req, res) => {
    const postToDoSchemaResponse = postCompleteSchema.safeParse(req.body);
    if (!postToDoSchemaResponse.success) {
        return res.status(411).json({
            Message: "Failure", FullMessage: "You sent the wrong inputs"
        })
    }
    // put it in mongo DB
}

const getAllTodosHandler = async (req, res) => {

}

const completeToDoHandler = async (req, res) => {
    const postCompleteSchemaResponse = postCompleteSchema.safeParse(req.body);
    if (!postCompleteSchemaResponse.success) {
        res.status(411).json({
            Message: "Failure", FullMessage: "Id is wrong"
        })
    }
}

module.exports = {
    createToDoHandler, getAllTodosHandler, completeToDoHandler
}