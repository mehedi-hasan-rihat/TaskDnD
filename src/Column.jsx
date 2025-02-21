import React from "react";
import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";
import './index.css'; // Ensure the CSS is being applied correctly

export default function Column({ column, tasks }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div
      ref={setNodeRef}
      className="bg-gray-200 p-5 rounded-lg w-full mx-auto my-5 cursor-grab dark:bg-gray-800 dark:text-white"
    >
      <p className="rounded py-2 px-2 text-white font-semibold text-lg font-sans uppercase bg-blue-400 w-full">
        {column.title}
      </p>
      <div className="mt-5 w-full">
        {tasks.map((task) => (
          <Task key={task._id} taskData={task} />
        ))}
      </div>
    </div>
  );
}
