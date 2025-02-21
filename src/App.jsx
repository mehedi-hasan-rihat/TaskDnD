import React, { useState } from "react";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";
import InputField from "./InputField";

export default function New() {
  const columns = [
    { id: "TODO", title: " TO Do" },
    { id: "In_Progress", title: " IN Progress" },
    { id: "DONE", title: " Done" },
  ];

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Add Tastes To HomePage",
      description: "Add new taste-related content to the homepage.",
      status: "TODO",
    },
    {
      id: 2,
      title: "Fix Navbar Issue",
      description: "Fix responsiveness issues in the navbar.",
      status: "TODO",
    },
    {
      id: 3,
      title: "Implement Drag and Drop",
      description: "Implement drag and drop functionality for tasks.",
      status: "In_Progress",
    },
    {
      id: 4,
      title: "Test All Features",
      description: "Ensure that all features work correctly.",
      status: "DONE",
    },
    {
      id: 5,
      title: "Write Documentation",
      description: "Write detailed documentation for the project.",
      status: "DONE",
    },
    {
      id: 6,
      title: "Fix CSS Bugs",
      description: "Fix CSS bugs related to the layout and styling.",
      status: "DONE",
    },
  ]);

 
  const handleAdd = (event) => {
    const { active, over } = event;
    if (!over) return; // If dropped outside, do nothing
  
    const taskId = parseInt(active.id);
    const overId = parseInt(over.id);
  
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const taskIndex = updatedTasks.findIndex((task) => task.id === taskId);
      const overIndex = updatedTasks.findIndex((task) => task.id === overId);
  
      if (taskIndex === -1) return prevTasks; // Task not found
  
      const taskToMove = { ...updatedTasks[taskIndex] }; // Copy task
      const overTask = updatedTasks[overIndex]; // Task being replaced
  
      // Remove the task from its original position
      updatedTasks.splice(taskIndex, 1);
  
      if (overTask) {
        // If dropped on another task, insert before it
        updatedTasks.splice(overIndex, 0, taskToMove);
        taskToMove.status = overTask.status; // Update status if necessary
      } else {
        // If dropped on an empty column, move it there
        taskToMove.status = over.id; 
        updatedTasks.push(taskToMove);
      }
  
      return updatedTasks;
    });
  };
  
  

  return (
    <div className="w-max mx-auto ">
      <h1 className="text-4xl my-5 font-semibold">MY TODO</h1>
      <InputField setTodo={setTasks} tasks={tasks} />
      <DndContext onDragEnd={handleAdd}>
        <div className="grid grid-cols-3 gap-8 overflow-hidden" >
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}