import React, { useState } from "react";
import "./style.css";

const InputField = ({ setTodo, tasks }) => {
  const [error, setError] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const title = e.target.title.value;
    const description = e.target.description.value;

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


    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      status: "TODO",
      timestamp: new Date().toISOString(), 
    };

    setTodo([...tasks, newTask]);
    setError(""); 
    console.log(newTask); 
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
  
      <input
        type="text"
        placeholder="Enter Task Title"
        name="title"
        className="input__box"
      />
      
  
      <textarea
        placeholder="Enter Task Description"
        name="description"
        className="input__box"
      ></textarea>

      {error && <div className="error-message">{error}</div>}

      <button type="submit" className="input_submit">
        Enter Task
      </button>
    </form>
  );
};

export default InputField;
