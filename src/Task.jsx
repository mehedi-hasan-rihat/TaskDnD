import { useDraggable } from "@dnd-kit/core";
import React from "react";

export default function Task({ taskData }) {
  const { id, title, description } = taskData;
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({
id
  })
  const style = transform ? {
    transform : `translate(${transform.x}px, ${transform.y}px)` 
  }: undefined
  return (
    <div
    ref={setNodeRef}
          {...attributes}
          {...listeners}
          style={style}
      className="bg-gray-900 hover:scale-105 duration-300  text-white p-5 rounded-lg w-[290px] mx-auto my-5 cursor-grab"
    >
   <div className="flex justify-between gap-2">
   <div className="">
     <p className="font-bold  text-sm font-sans uppercase">{title}</p>
     <p className="text-sm mt-2 line-clamp-2">{description ||"No Discription"}</p>
     </div>

     <div className="flex flex-col gap-4 cursor-pointer">
      <div className="bg-gray-100 text-black p-1 px-3 rounded-full hover:scale-110">D</div>
      <div className="bg-gray-100 text-black p-1 px-3 rounded-full hover:scale-110">U</div>
     </div>
   </div>
    </div>
  );
}
