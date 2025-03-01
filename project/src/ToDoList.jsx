import { useEffect, useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";


function ToDoList() {
    const data = JSON.parse(localStorage.getItem('task')) || [];
    const [tasks, setTasks] = useState(data);
    const [isReadOnly, setIsReadOnly] = useState(true);
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

    function renameTask(index) {
        const toggleReadOnly = () => {
            setIsReadOnly(!isReadOnly);
        };
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

            <div className="add-section">
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
                        <FontAwesomeIcon className="rename-icon" icon={faFileSignature} onClick={() => renameTask(index)} />
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