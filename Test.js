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
  
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     title: "Add Tastes To HomePage",
  //     description: "Add new taste-related content to the homepage.",
  //     status: "TODO",
  //   },
  //   {
  //     id: 2,
  //     title: "Fix Navbar Issue",
  //     description: "Fix responsiveness issues in the navbar.",
  //     status: "TODO",
  //   },
  //   {
  //     id: 3,
  //     title: "Implement Drag and Drop",
  //     description: "Implement drag and drop functionality for tasks.",
  //     status: "In_Progress",
  //   },
  //   {
  //     id: 4,
  //     title: "Test All Features",
  //     description: "Ensure that all features work correctly.",
  //     status: "DONE",
  //   },
  //   {
  //     id: 5,
  //     title: "Write Documentation",
  //     description: "Write detailed documentation for the project.",
  //     status: "DONE",
  //   },
  //   {
  //     id: 6,
  //     title: "Fix CSS Bugs",
  //     description: "Fix CSS bugs related to the layout and styling.",
  //     status: "DONE",
  //   },
  // ]);
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     try {
  //       const { data } = await axios("http://localhost:3000/tasks/example@example.com");
  //       setTasks(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching tasks:", error);
  //     }
  //   };

  //   fetchTasks();
  // }, []);