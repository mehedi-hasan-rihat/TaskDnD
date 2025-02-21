import React from "react";
import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";

export default function Column2({ column, tasks }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });
  return (
    <div ref={setNodeRef} className="bg-gray-200 duration-300 p-5 rounded-lg w-full mx-auto my-5 cursor-grab">
      <p className="rounded py-2 px-2 text-white font-semibold  text-lg font-sans uppercase bg-blue-400 w-full">
        {column.title}
      </p>
      <div ref={setNodeRef} className=" mt-5 w-full">
        {tasks.map((task) => {
          return <Task key={task.id} taskData={task} />;
        })}
      </div>
    </div>
  );
}
