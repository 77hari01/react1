
// File: pages/EditDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EditDetails() {
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

  const handleEdit = async (id, newName, newDescription) => {
    try {
      await axios.put('http://localhost:5000/api/tasks/${id}, { name: newName, description: newDescription }');
      alert('Task updated successfully!');
    } catch (error) {
      alert('Error updating task!');
    }
  };

  return (
    <div>
      <h2>Edit Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <input
              type="text"
              defaultValue={task.name}
              onBlur={(e) => handleEdit(task._id, e.target.value, task.description)}
            />
            <textarea
              defaultValue={task.description}
              onBlur={(e) => handleEdit(task._id, task.name, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditDetails;