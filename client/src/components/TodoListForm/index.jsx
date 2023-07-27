import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function TodoListForm({ show, handleClose, save }) {
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

  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = taskDescription;
    save(taskObj);
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
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
        <Button className="btn create-todo-list-item" onClick={handleSave}>
          Create
        </Button>
        <Button className="btn cancel-todo-list-item" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
