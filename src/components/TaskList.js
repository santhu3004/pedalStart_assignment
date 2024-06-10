// src/components/TaskList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Task List</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <ul className="list-group mb-4">
            {tasks.map(task => (
              <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
                <Link to={`/tasks/${task._id}`} className="text-decoration-none">{task.title}</Link>
                <span>
                  <Link to={`/tasks/edit/${task._id}`} className="btn btn-sm btn-secondary me-2">Edit</Link>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Link to="/new-task" className="btn btn-primary">Add New Task</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
