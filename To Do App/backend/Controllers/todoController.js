const { postCompleteSchema } = require('../types');
const { ToDo } = require('../connect');

const createToDoHandler = async (req, res) => {
    const postToDoSchemaResponse = postCompleteSchema.safeParse(req.body);
    if (!postToDoSchemaResponse.success) {
        return res.status(411).json({
            Message: "Failure", FullMessage: "You sent the wrong inputs"
        })
    }
    try {
        await ToDo.create({
            title: req.body.title, description: req.body.description, completed: false
        });
        return res.status(200).json({
            Message: "Success", FullMessage: "To Do created"
        })
    }
    catch (err) {
        return res.status(401).json({
            Message: "Failure", FullMessage: "Something went wrong"
        })
    }
}

const getAllTodosHandler = async (req, res) => {
    try {
        const allToDos = await ToDo.find({});
        return res.status(200).json({
            Message: "Success", FullMessage: "Successfully Fetch the Data", Data: allToDos
        })
    } catch (err) {
        return res.status(401).json({
            Message: "Failure", FullMessage: "Something went wrong"
        })
    }
}

const completeToDoHandler = async (req, res) => {
    const postCompleteSchemaResponse = postCompleteSchema.safeParse(req.body);
    if (!postCompleteSchemaResponse.success) {
        res.status(411).json({
            Message: "Failure", FullMessage: "Id is wrong"
        })
    }
    try {
        await ToDo.findOneAndUpdate({ _id: req.body.id }, { completed: true })
        return res.status(200).json({
            Message: "Success", FullMessage: "To Do Marked as Completed"
        })
    } catch (err) {
        return res.status(401).json({
            Message: "Failure", FullMessage: "Something went wrong"
        })
    }
}

module.exports = {
    createToDoHandler, getAllTodosHandler, completeToDoHandler
}