import { useEffect, useState } from 'react';
import './index.css';

function ToDoList() {
    const data = JSON.parse(localStorage.getItem('task')) || [];

    const [tasks, setTasks] = useState(data);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(tasks))
    }, [tasks])

    function handleInputChange(event) {
        setNewTask(event.target.value);
    };

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    };

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    return (
        <div className="to-do-list">

            <h1>Lista zadań</h1>

            <div>
                <input
                    className="input-txt"
                    type="text"
                    placeholder="Wprowadź nazwę..."
                    value={newTask}
                    onChange={handleInputChange} />
                <button className="add-button"
                    onClick={addTask}>
                    Dodaj
                </button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <input type="text" className="text" placeholder={task}></input>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Usuń
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            ↑
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            ↓
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );
};

export default ToDoList;