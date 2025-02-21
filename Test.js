 // const handleAdd = (e) => {
  //   const { active, over } = e;
  //   if (!over) return;

  //   const taskId = active.id;
  //   const isColumn = columns.some((column) => column.id === over.id);

  //   setTasks((prevTasks) =>
  //     prevTasks.map((task) =>
  //       task.id === taskId
  //         ? { ...task, status: isColumn ? over.id : task.status }
  //         : task
  //     )
  //   );
  // // };

  // const handleAdd = (event) => {
  //   const { active, over } = event;
  //   if (!over) return; // If dropped outside, do nothing
  
  //   const taskId = parseInt(active.id);
  //   const overId = parseInt(over.id);
  
  //   setTasks((prevTasks) => {
  //     const updatedTasks = [...prevTasks];
  //     const taskIndex = updatedTasks.findIndex((task) => task.id === taskId);
  //     const overIndex = updatedTasks.findIndex((task) => task.id === overId);
  
  //     if (taskIndex === -1) return prevTasks; // Task not found
  
  //     const taskToMove = { ...updatedTasks[taskIndex] }; // Copy task
  //     const overTask = updatedTasks[overIndex]; // Task being replaced
  
  //     // Remove the task from its original position
  //     updatedTasks.splice(taskIndex, 1);
  
  //     if (overTask) {
  //       // If dropped on another task, insert before it
  //       updatedTasks.splice(overIndex, 0, taskToMove);
  //       taskToMove.status = overTask.status; // Update status if necessary
  //     } else {
  //       // If dropped on an empty column, move it there
  //       taskToMove.status = over.id; 
  //       updatedTasks.push(taskToMove);
  //     }
  
  //     return updatedTasks;
  //   });
  // };
  