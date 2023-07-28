import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

export default function EditTodoForm({
  show,
  handleClose,
  updateTask,
  taskObj,
  taskList,
  setTaskList
}) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setTaskDescription(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.todoTitle);
    setTaskDescription(taskObj.todoDescription);
  }, []);

  const handleUpdate = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = taskDescription;
    updateTask(taskObj);
    window.location.reload();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="form-group">
            <label>Task Title</label>
            <input
              type="text"
              className="form-control"
              value={taskName}
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <div className="form-group">
            <label>Task Description</label>
            <textarea
              rows="5"
              className="form-control"
              value={taskDescription}
              onChange={handleChange}
              name="taskDescription"
            ></textarea>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn create-todo-list-item" onClick={handleUpdate}>
          Update
        </Button>
        <Button className="btn cancel-todo-list-item" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
