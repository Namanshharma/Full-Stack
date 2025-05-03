const express = require('express');
const { createToDoHandler, getAllTodosHandler, completeToDoHandler } = require('../Controllers/todoController')
const router = express.Router();

router.post('/todo', createToDoHandler)
    .get('/todos', getAllTodosHandler)
    .put('/completed', completeToDoHandler);

module.exports = router