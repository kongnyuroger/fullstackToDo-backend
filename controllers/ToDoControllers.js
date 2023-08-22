/*const ToDoModel = require('../models/ToDoModels')

module.exports.getToDo = async(req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}*const { _id } = req.body;
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => {res.send("delete successfully...")})
    .catch((err) => console.log(err))
}


module.exports.saveToDo = async(req, res) => {

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

module.exports.updateToDo = async(req, res) => {
    const { _id, text } = req.body;
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => {res.send("update successfully...")})
    .catch((err) => console.log(err))
}
module.exports.deleteToDo = async(req, res) => {
    const { _id } = req.body;
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => {res.send("delete successfully...")})
    .catch((err) => console.log(err))
}
*/


