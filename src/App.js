import "bootstrap/dist/css/bootstrap.min.css";

import AddTaskForm from "./components/AddTaskForm.jsx";
import UpdateForm from "./components/UpdateForm.jsx";
import ToDo from "./components/ToDo.jsx";
import React, { useState } from "react";
import "./App.css";

function App() {
  //Tasks (ToDo List) state

  const [toDo, setTodo] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false },
  ]);

  //Temp State

  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState("");

  //Add Task

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setTodo([...toDo, newEntry]);
    }
  };

  //Delete Task

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setTodo(newTasks);
  };

  //Completed Task

  const completedTask = (id) => {
    let newTasks = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTodo(newTasks);
  };

  //Cancel Update

  const cancelUpdate = () => {
    setEditTask("");
  };

  //Change Task for update

  const changeTask = (e) => {
    let newEntry = {
      id: editTask.id,
      title: e.target.value,
      status: editTask.status ? true : false,
    };
    setEditTask(newEntry);
  };

  //Update Task

  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== editTask.id);
    let updatedObject = [...filterRecords, editTask];
    setTodo(updatedObject);
    setEditTask("");
  };
  return (
    <div className="container App">
      <br />
      <br />
      <h1>To Do List App</h1>
      <br />
      <br />

      {/* Update Task */}

      {editTask && editTask ? (
        <UpdateForm
          editTask={editTask}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Display ToDos */}
      {toDo && toDo.length ? "" : "No Tasks...."}

      <ToDo
        toDo={toDo}
        completedTask={completedTask}
        setEditTask={setEditTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
