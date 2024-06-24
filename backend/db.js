const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shrey544:Danbrown24@shreyasmanoti.deiuqsn.mongodb.net/todo-app?retryWrites=true&w=majority&appName=ShreyasManoti")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})


const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}