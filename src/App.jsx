import React, { useEffect, useState } from "react";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";
import InputField from "./InputField";
import axios from "axios";
import './index.css'; // Ensure the CSS is being applied correctly

export default function New() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const columns = [
    { id: "TODO", title: "TO Do" },
    { id: "In_Progress", title: "In Progress" },
    { id: "DONE", title: "Done" },
  ];

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios("http://localhost:3000/tasks/example@example.com");
        setTasks(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // Update dark mode globally using class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleAdd = (event) => {
    const { active, over } = event;
    if (!over) return; // If dropped outside, do nothing

    const taskId = active.id; // Use the `id` of the task
    const overId = over.id; // The ID of the column the task is dropped into

    // Update task status and reorder them
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];

      // Find the task being dragged
      const taskIndex = updatedTasks.findIndex((task) => task._id === taskId);
      if (taskIndex === -1) return prevTasks; // Task not found

      const taskToMove = updatedTasks[taskIndex]; // Task being dragged

      // Update the status of the task based on where it is dropped
      taskToMove.status = overId;

      // Remove the task from the previous position
      updatedTasks.splice(taskIndex, 1);

      // Place it at the correct position in the new column
      updatedTasks.push(taskToMove);

      const updateTasks = async () => {
        try {
          const { data } = await axios.put(`http://localhost:3000/tasks/status/${taskId}`, {
            status: overId,
          });
          console.log(data);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      };

      updateTasks();

      return updatedTasks;
    });
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
 
    <div className={`py-5 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>   <div className={` w-max mx-auto `}>
    <h1 className="text-4xl my-5 font-semibold">MY TODO</h1>
    <InputField setTodo={setTasks} tasks={tasks} />
    {/* Dark mode toggle button */}
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-blue-500 rounded-full text-white mt-5"
    >
      Toggle Dark Mode
    </button>

    <DndContext onDragEnd={handleAdd}>
      <div className="grid grid-cols-3 gap-8 overflow-hidden">
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            tasks={tasks.filter((task) => task.status === column.id)}
          />
        ))}
      </div>
    </DndContext>
  </div></div>
  );
}
