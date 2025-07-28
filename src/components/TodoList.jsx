import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [deletedTasks, setDeletedTasks] = useState([]);

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && newTask.trim() !== "") {
            setTasks([...tasks, newTask.trim()]);
            setNewTask("");
        }
    };

    const handleDelete = (index) => {
        const taskToDelete = tasks[index];
        setDeletedTasks([...deletedTasks, taskToDelete]);

        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div className="container d-flex flex-column align-items-center mt-5">
            <h1 className="display-3 text-muted">todos</h1>

            <div className="card shadow w-100" style={{ maxWidth: "600px" }}>
                <input
                    className="form-control border-0 border-bottom rounded-0"
                    placeholder="What needs to be done?"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={handleKeyPress}
                />

                <ul className="list-group list-group-flush">
                    {tasks.length === 0 ? (
                        <li className="list-group-item text-muted">No hay tareas, añadir tareas</li>
                    ) : (
                        tasks.map((task, index) => (
                            <TodoItem
                                key={index}
                                text={task}
                                onDelete={() => handleDelete(index)}
                            />
                        ))
                    )}
                </ul>

                <div className="card-footer text-muted small">
                    {tasks.length} {tasks.length === 1 ? "item" : "items"} left
                </div>
            </div>
            <div className="card mt-4 w-100" style={{ maxWidth: "600px" }}>
                <div className="card-header bg-secondary text-white">
                    Tareas eliminadas
                </div>
                <ul className="list-group list-group-flush">
                    {deletedTasks.length === 0 ? (
                        <li className="list-group-item text-muted">No hay tareas eliminadas</li>
                    ) : (
                        deletedTasks.map((task, index) => (
                            <li key={index} className="list-group-item text-muted">
                                {task}
                            </li>
                        ))
                    )}
                </ul>
            </div>

        </div>
    );
};

export default TodoList;
