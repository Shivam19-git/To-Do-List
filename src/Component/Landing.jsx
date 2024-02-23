import React, { useState } from "react";


export const Landing = () => {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Pickup Laundry", "Go for a Walk"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
  
    function addTasks(event) {
        event.preventDefault();
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTasks(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function pushTaskUp(index) {
        if (index === 0) return;
        const updatedTasks = [...tasks];
        const temp = updatedTasks[index];
        updatedTasks[index] = updatedTasks[index - 1];
        updatedTasks[index - 1] = temp;
        setTasks(updatedTasks);
    }

    function pushTaskDown(index) {
        if (index === tasks.length - 1) return;
        const updatedTasks = [...tasks];
        const temp = updatedTasks[index];
        updatedTasks[index] = updatedTasks[index + 1];
        updatedTasks[index + 1] = temp;
        setTasks(updatedTasks);
    }

    return (
        <div className="mainContainer">
            <h2>TO-DO LIST</h2>
            <form onSubmit={addTasks} className="addContainer">
                
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={newTask}
                    placeholder="Enter Task"
                />
                <button className="addTask" type="submit"><i className="fas fa-plus"></i></button>
            </form>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <div className="buttonContainer">
                            <button className="deleteButton" onClick={() => deleteTasks(index)}><i className="fas fa-trash-alt"></i></button>
                            <button className="moveButton" onClick={() => pushTaskUp(index)}><i className="fas fa-arrow-up"></i></button>
                            <button className="moveButton" onClick={() => pushTaskDown(index)}><i className="fas fa-arrow-down"></i></button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};
