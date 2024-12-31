// File: pages/ViewDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewDetails() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks');
        setTasks(response.data);
      } catch (error) {
        alert('Error fetching tasks!');
      }
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      try {
        await axios.delete('http://localhost:5000/api/tasks/${id}');
        setTasks(tasks.filter((task) => task._id !== id));
        alert('Task deleted successfully!');
      } catch (error) {
        alert('Error deleting task!');
      }
    }
  };

  return (
    <div>
      <h2>View Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.name}:</strong> {task.description}
            <button onClick={() => handleDelete(task._id)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewDetails;