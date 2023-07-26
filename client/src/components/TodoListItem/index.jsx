import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import React, { useState } from 'react'
import EditTodoForm from '../EditTodoForm';

export default function TodoListItem({taskObj, index, deleteTask, updateListArray}) {
    const [show, setShow] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const handleClose = () => {
        setShow(!show);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Step 3: Toggle the checkbox state on each click
    };
    
  return (
    <>
        <div className = "card-wrapper mr-5" style={{ opacity: isChecked ? '0.3' : '1'}}>
            <div className = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius" : "5px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div style={{"position": "absolute", "left" : "20px", "bottom" : "20px"}}>
                <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={`flexCheckDefault-${index}`} // Add unique ID to each checkbox based on the index
                    checked={isChecked} // Step 2: Bind checkbox state to the checked attribute
                    onChange={handleCheckboxChange} // Step 2: Add the event handler for checkbox change
                />
                    <label className="form-check-label" for="flexCheckDefault">
                        Complete
                    </label>
                    </div>
                </div>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className = "far fa-edit" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer", "margin-right" : "10px"}} onClick = {() => setShow(true)}></i>
                    <i className="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
            </div>
        </div>
        <EditTodoForm show={show} handleClose={handleClose} updateTask={updateTask} taskObj={taskObj}/>
    </>
  )
}
