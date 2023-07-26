import { useEffect, useState } from "react";
import { TodoListForm, TodoListItem } from "../../components";

function Todo() {
  const [show, setShow] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList")
    if(arr) {
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  }

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  }

  const handleClose = () => {
    setShow(!show);
  }

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setShow(false);
    window.location.reload();
  }

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className='btn btn-primary' onClick={() => setShow(true)}>Create Task</button>
      </div>
      <div className='task-container'>
          {taskList && taskList.map((obj, index) => <TodoListItem taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
      </div>
      <TodoListForm handleClose={handleClose} show={show} save={saveTask}/>
    </>
  )
}

export default Todo;
