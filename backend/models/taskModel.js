const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a task"],
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
    timestamps: true
});

const taskModel = mongoose.model("Task", taskSchema);
module.exports = taskModel;