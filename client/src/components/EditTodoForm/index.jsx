import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

export default function EditTodoForm({show, handleClose, updateTask, taskObj}) {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleChange = (e) => {
        const{name, value} = e.target;

        if(name === "taskName") {
            setTaskName(value);
        } else {
            setTaskDescription(value);
        }
    }

    useEffect(() => {
        setTaskName(taskObj.Name);
        setTaskDescription(taskObj.Description)
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {};
        tempObj['Name'] = taskName;
        tempObj['Description'] = taskDescription;
        updateTask(tempObj);
    }

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className='form-group'>
                <label>Task Title</label>
                <input type="text" className='form-control' value={taskName} onChange={handleChange} name="taskName"/>
            </div>
            <div className='form-group'>
                <label>Task Description</label>
                <textarea rows="5" className='form-control' value={taskDescription} onChange={handleChange} name="taskDescription"></textarea>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>
  )
}

