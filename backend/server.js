const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/connectDB');
const taskRoutes = require('./routes/taskRoute');
const cors = require('cors')

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: ["http://localhost:3000", "https://mern-task-app-project7399.onrender.com"]
}));

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Home page");
});

const startSever = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch(error) {
        console.log(error);
    }
};

startSever();