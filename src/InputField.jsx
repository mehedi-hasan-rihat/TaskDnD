import React, { useState } from "react";
import axios from "axios";

const InputField = ({ setTodo, tasks }) => {
  const [error, setError] = useState(""); 
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { title, description, dueDate } = formData;

    // Validate title
    if (!title) {
      setError("Title is required!");
      return;
    }
    if (title.length > 50) {
      setError("Title cannot exceed 50 characters!");
      return;
    }

    if (description.length > 200) {
      setError("Description cannot exceed 200 characters!");
      return;
    }

    // Validate dueDate (if needed)
    if (!dueDate) {
      setError("Due date is required!");
      return;
    }

    const newTask = {
      title,
      description,
      dueDate,
      status: "TODO",
      timestamp: new Date().toISOString(),
      email: "example@example.com"
    };

    try {
      const { data } = await axios.post("http://localhost:3000/tasks", newTask);
      const newData = { _id: data.insertedId, ...newTask };
      setTodo([...tasks, newData]);
      setFormData({ title: '', description: '', dueDate: '' }); // Reset input fields
      setError(""); // Clear error message
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form className="flex flex-col w-full max-w-lg sm:w-11/12 md:w-3/4 lg:w-1/2 gap-4 p-6 rounded-lg shadow-xl bg-white" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-3 text-base rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />
      
      <textarea
        placeholder="Enter Task Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-3 text-base rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[80px]"
      ></textarea>

      <input
        type="date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        className="w-full p-3 text-base rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
      />

      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

      <button 
        type="submit" 
        className="w-full mt-4 py-3 text-white font-semibold bg-blue-600 rounded-lg hover:bg-blue-500 active:scale-95 focus:outline-none transition-all duration-200"
      >
        Enter Task
      </button>
    </form>
  );
};

export default InputField;
