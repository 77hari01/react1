// File: pages/AddDetails.js
import React, { useState } from 'react';
import axios from 'axios';

function AddDetails() {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tasks', { name: taskName, description });
      alert('Task added successfully!');
      setTaskName('');
      setDescription('');
    } catch (error) {
      alert('Error adding task!');
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name:</label>
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddDetails;