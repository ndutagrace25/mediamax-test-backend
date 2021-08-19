// import thr Todo model
const Todo = require("../models").Todo;

module.exports = {
  // fetch all todos from the database
  getAllTodos(result) {
    Todo.findAll()
      .then((todos) => {
        result(null, todos);
      })
      .catch((error) => result(error, null));
  },
  //   save a todo in the database
  saveTodo(todo, result) {
    console.log(todo);
    if (Object.keys(todo).length === 0) {
      result({ error: "Task should not be empty" });
    }
    Todo.findOne({
      where: {
        task: todo.task,
      },
    })
      .then((data) => {
        if (data !== null) {
          result({ error: "Todo Exists" }, null);
        } else {
          Todo.create({
            task: todo.task,
            status: todo.status,
          })
            .then(() => {
              result(null, { message: "Task created" });
            })
            .catch((error) => {
              result(error, null);
            });
        }
      })
      .catch((error) => {
        result(error, null);
      });
  },
  // update to-do status
  updateToDo(todo, result) {
    Todo.findOne({
      where: { id: todo.id },
    })
      .then((data) => {
        if (data !== null) {
          Todo.update(
            {
              task: todo.task,
              status: todo.status,
            },
            { where: { id: todo.id } }
          ).then(() => {
            result(null, { message: "Task updated!" });
          });
        } else {
          result({ error: "No task found by the given id" });
        }
      })
      .catch((error) => {
        result({ error: "Something went wrong" }, null);
      });
  },
};
