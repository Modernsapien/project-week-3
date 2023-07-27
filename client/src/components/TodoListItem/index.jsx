import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import React, { useState, useEffect } from "react";
import EditTodoForm from "../EditTodoForm";

export default function TodoListItem({
  taskObj,
  index,
  deleteTask,
  updateListArray,
}) {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  // --color-1: #bdede0;
  // --color-2: #006494;
  // --color-3: #f25f5c;
  // --color-4: #f7d6e0;
  // --color-5: #f1dba0;
  // --vivid-color-1: #92ecd4;
  // --vivid-color-4: #f6adc3;
  // --vivid-color-5: #f1ce6b;
  // --navbar-background: #50a7a9;
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

  useEffect(() => {
    const savedStatus = localStorage.getItem(`task_${index}_completed`);
    if (savedStatus !== null) {
      setIsChecked(savedStatus === "true");
    }
  }, [index]);

  const updateLocalStorage = (checked) => {
    localStorage.setItem(`task_${index}_completed`, checked.toString());
  };

  const handleClose = () => {
    setShow(!show);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleCheckboxChange = () => {
    const updatedStatus = !isChecked;
    setIsChecked(updatedStatus);
    updateLocalStorage(updatedStatus);
  };

  return (
    <>
      <div
        className="card-wrapper mr-5"
        style={{ opacity: isChecked ? "0.3" : "1" }}
      >
        <div
          className="card-top"
          style={{ "background-color": colors[index % 5].primaryColor }}
        ></div>
        <div className="task-holder">
          <span
            className="card-header"
            style={{
              "background-color": colors[index % 5].secondaryColor,
              "border-radius": "5px",
            }}
          >
            {taskObj.Name}
          </span>
          <p className="mt-3">{taskObj.Description}</p>

          <div style={{ position: "absolute", left: "20px", bottom: "20px" }}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={`flexCheckDefault-${index}`}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" for="flexCheckDefault">
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
                "margin-right": "10px",
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
      />
    </>
  );
}
