// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/new-task" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
