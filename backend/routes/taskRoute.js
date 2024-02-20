const express = require('express');
const router = express.Router();
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/taskController')



// Routes
router.route("/").get(getTasks)
                .post(createTask);

router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router;