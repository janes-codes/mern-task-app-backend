const taskModel = require('../models/taskModel');
const mongoose = require('mongoose')

// Create a task - /api/tasks
exports.createTask = async (req, res) => {
    try{
        const task = await taskModel.create(req.body);
        res.status(200).json(task);
    } catch(error) {
        res.status(500).json({msg: error.message});
    }
};

// Get all Tasks - /api/tasks
exports.getTasks = async (req, res) => {
    try{
        const tasks = await taskModel.find();
        res.status(200).json(tasks);
    } catch(err) {
        res.status(500).json({msg: err.message});
    }
};

// Get single Task - /api/tasks/:id
exports.getTask = async (req, res) => {
    try{
        const {id} = req.params;
        const task = await taskModel.findById(id);
        
        if(!task) {
            return res.status(404).json(`No task with id: ${id}`)
        }

        res.status(200).json(task)
    } catch(err) {
        res.status(500).json({msg: err.message})
    }
}

// Delete Task - /api/tasks/:id
exports.deleteTask = async (req, res) => {
    try{
        const {id} = req.params;
        const task = await taskModel.findByIdAndDelete(id)

        if(!task) {
            return res.status(404).json(`No task with id: ${id}`)
        }
        
        res.status(200).send("Task deleted")
    } catch(err) {
        res.status(500).json({msg: err.message})
    }
};

//  Update a task - /api/tasks/:id
exports.updateTask = async (req, res) => {
    try{
        const {id} = req.params;
        const task = await taskModel.findByIdAndUpdate(
            {_id: id}, 
            req.body, 
            {
                new: true,
                runValidators: true
            } 
            )
        if(!task) {
            res.status(404).json(`No task with id: ${id}`)
        }
        res.status(200).json(task)
    } catch(err) {
        res.status(500).json({msg: err.message})
    }
} 