const express = require("express")
const ToDoModel = require('../models/ToDoModels')
//const getToDo = require("../controllers/ToDoControllers");
//const saveToDo = require("../controllers/ToDoControllers");
//const updateToDo = require("../controllers/ToDoControllers");
//const deleteToDo = require("../controllers/ToDoControllers");

const router = express()

router.get('/', async(req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}
    )

router.post('/save', async(req, res) => {
    const { text } = req.body
    console.log(req)

   ToDoModel
   .create({text})
   .then((data) => {
    console.log('added successfully....');
    console.log(data);
    res.send(data);
   })
    
}
    );

router.post('/update', async(req, res) => {
    const { _id, text } = req.body;
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => {res.send("update successfully...")})
    .catch((err) => console.log(err))
}
    );

router.post('/delete', async(req, res) => {
    const { _id } = req.body;
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => {res.send("delete successfully...")})
    .catch((err) => console.log(err))
}

    );

module.exports = router