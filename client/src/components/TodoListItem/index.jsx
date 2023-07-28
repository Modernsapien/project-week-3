/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { useState, useEffect } from "react";
import EditTodoForm from "../EditTodoForm";

export default function TodoListItem({
  taskObj,
  index,
  deleteTask,
  updateListArray,
  taskList,
  setTaskList,
  isFinished
}) {
  const userId = localStorage.getItem("id");
  const [show, setShow] = useState(false);
  

  const colors = [
    {
      primaryColor: "#7da5dd",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#f1ce6b",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#82d4be",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#f6adc3",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#d3a0f7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const handleClose = () => {
    setShow(!show);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = (e) => {
    deleteTask(index);
  };

  const handleCheckboxChange = async () => {
    const updatedStatus = !taskObj.isFinished; 

    const apiURL = `http://localhost:3000/todos/${taskObj.todoId}`;
    const res = await fetch(apiURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isFinished: updatedStatus,
        userId: userId,
      }),
    });

    if (res.ok) {
      updateTask({ ...taskObj, isFinished: updatedStatus });
      window.location.reload(); 
    }
  };


  return (
    <>
      <div
        className="card-wrapper mr-5"
        style={{ opacity: taskObj.isFinished ? "0.3" : "1" }}
      >
        <div
          className="card-top"
          style={{ backgroundColor: colors[index % 5].primaryColor }}
        ></div>
        <div className="task-holder">
          <span
            className="card-header"
            style={{
              backgroundColor: colors[index % 5].secondaryColor,
              borderRadius: "5px",
            }}
          >
            {taskObj.todoTitle}
          </span>
          <p className="mt-3">{taskObj.todoDescription}</p>

          <div style={{ position: "absolute", left: "20px", bottom: "20px" }}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={`flexCheckDefault-${index}`}
                checked={taskObj.isFinished}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Complete
              </label>
            </div>
          </div>

          <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
            <i
              className="far fa-edit"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
                marginRight: "10px",
              }}
              onClick={() => setShow(true)}
            ></i>
            <i
              className="fas fa-trash-alt"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={handleDelete}
            ></i>
          </div>
        </div>
      </div>
      <EditTodoForm
        show={show}
        handleClose={handleClose}
        updateTask={updateTask}
        taskObj={taskObj}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </>
  );
}
