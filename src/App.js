import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddDetails from './AddDetails';
import EditDetails from './EditDetails';
import ViewDetails from './ViewDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Task Management</h1>

        {/* Navigation Links */}
        <nav>
          <ul>
            <li><Link to="/add">Add Task</Link></li>
            <li><Link to="/edit">Edit Task</Link></li>
            <li><Link to="/view">View Tasks</Link></li>
          </ul>
        </nav>

        {/* Routing */}
        <Routes>
          {/* Route for adding a task */}
          <Route path="/add" element={<AddDetails />} />

          {/* Route for editing a task */}
          <Route path="/edit" element={<EditDetails />} />

          {/* Route for viewing tasks */}
          <Route path="/view" element={<ViewDetails />} />

          {/* Default route if none of the above match */}
          <Route path="/" element={<h2>Welcome to the Task Management App</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
