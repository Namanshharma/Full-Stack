const zod = require('zod');

const postToDoSchema = zod.object({
    title: zod.string(), description: zod.string()
})

const postCompleteSchema = zod.object({
    id: zod.string()
})

module.exports = {
    postToDoSchema, postCompleteSchema
}