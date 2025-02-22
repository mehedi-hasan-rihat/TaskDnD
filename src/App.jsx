import React, { useEffect, useState, useContext } from "react";
import Column from "./Components/Column";
import { DndContext } from "@dnd-kit/core";
import InputField from "./Components/InputField";
import axios from "axios";
import './index.css'; 
import { AuthContext } from "./provider/AuthContex";
import Loader from "./Components/Loader";
import { useNavigate } from "react-router-dom";

export default function New() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false); 
  const { user,  loading, logOut } = useContext(AuthContext);
 
  const columns = [
    { id: "TODO", title: "TO Do" },
    { id: "In_Progress", title: "In Progress" },
    { id: "DONE", title: "Done" },
  ];
  const navigate = useNavigate()
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios(`${import.meta.env.VITE_URL}/tasks/${user?.email}`);
   setTasks(data)
        console.log(data); 

      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [user]);

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
    if (!over) return;
    if (active.id === over.id) return; 

    const taskId = active.id; 
    const overId = over.id; 

    // Update task status and reorder them
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];

      const taskIndex = updatedTasks.findIndex((task) => task._id === taskId);
      if (taskIndex === -1) return prevTasks;

      const taskToMove = updatedTasks[taskIndex];
      taskToMove.status = overId;

      updatedTasks.splice(taskIndex, 1);
      updatedTasks.push(taskToMove);

      const updateTasks = async () => {
        try {
          const { data } = await axios.put(`${import.meta.env.VITE_URL}/tasks/status/${taskId}`, {
            status: overId,
          });
          console.log("Task status updated:", data);
        } catch (error) {
          console.error("Error updating task status:", error);
        }
      };

      updateTasks();

      return updatedTasks;
    });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if(loading){
    return <Loader/>
  }

  if(!user){
    navigate('/login')
  }

  return (
    <div className={`min-h-screen py-5 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} transition-all duration-300`}>
      
      <div className="max-w-screen-xl mx-auto px-4 mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-20 my-5">
  <h1 className="text-3xl font-semibold text-center sm:text-left mb-6 sm:mb-0">
    TODO List {user?.displayName}
  </h1>
  
  <div className="flex  flex-col md:flex-row gap-2 md:gap-5">
    <button 
      className="py-2 bg-blue-500 text-white px-4 rounded mb-4 sm:mb-0" 
      onClick={() => logOut()}
    >
      Logout
    </button>
    
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-colors duration-300"
    >
      Toggle Dark Mode
    </button>
  </div>
</div>

        
        <InputField setTodo={setTasks} tasks={tasks} />

        

        <DndContext onDragEnd={handleAdd}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {columns.map((column) => (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
                setTasks={setTasks} 
              />
            ))}
          </div>
        </DndContext>
      </div>
    </div>
  );
}
