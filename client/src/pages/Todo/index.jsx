import { useEffect, useState } from "react";
import { TodoListForm, TodoListItem } from "../../components";

function Todo() {
  const userId = localStorage.getItem("id");

  const [show, setShow] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      const apiURL = `http://localhost:3000/todos/user/${userId}`;
      const res = await fetch(apiURL);

      if (res.ok) {
        const data = await res.json();
        setTaskList(data);
      }
    };
    fetchTask();
  }, []);

  const deleteTask = async (index) => {
    const apiURL = `http://localhost:3000/todos/${index}`;
    const res = await fetch(apiURL, {
      method: "DELETE",
    });
    if (res.ok) {
      console.log(taskList);
      const filtered = taskList.filter((task) => task.todoId != index);
      setTaskList(filtered);
    }
  };

  const updateListArray = async (obj, index) => {
    const apiURL = `http://localhost:3000/todos/${index}`;
    console.log(obj);
    const res = await fetch(apiURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        todoTitle: obj.Name,
        todoDescription: obj.Description,
        isFinished: obj.isFinished,
        userId: userId,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      const updatedTaskList = taskList.map((task) => {
        if (task.todoId === data.id) {
          task = data;
        }
        return task;
      });
      setTaskList(updatedTaskList);
      setShow(false);
    }
  };
  console.log(taskList);
  const handleClose = () => {
    setShow(!show);
  };

  const saveTask = async (taskObj) => {
    const apiURL = "http://localhost:3000/todos";
    const res = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        todoTitle: taskObj.Name,
        todoDescription: taskObj.Description,
        isFinished: false,
        userId: userId,
      }),
    });

    if (res.ok) {
      const data = await res.json();

      setTaskList([...taskList, data]);
      setShow(false);
    }
  };
  // console.log(taskList);
  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button
          className="btn create-todo-list-button"
          onClick={() => setShow(true)}
        >
          + Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList.length > 0 &&
          taskList.map((obj) => (
            <TodoListItem
              key={obj.todoId}
              taskList={taskList}
              setTaskList={setTaskList}
              taskObj={obj}
              index={obj.todoId}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <TodoListForm handleClose={handleClose} show={show} save={saveTask} />
    </>
  );
}

export default Todo;
