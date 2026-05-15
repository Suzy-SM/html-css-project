let tasks = [
  { id: 1, title: "Learn JavaScript", done: false },
  { id: 2, title: "Practice Git", done: true },
  { id: 3, title: "Build small project", done: false }
];

// helper to print tasks nicely
function showTasks(list) {
  console.log("\nTASK LIST:");
  for (let task of list) {
    let status = task.done ? "✓" : "✗";
    console.log(task.id + ". [" + status + "] " + task.title);
  }
}

showTasks(tasks);

// Complete Task

 function completeTask(id) {
   for (let task of tasks) {
     if (task.id === id) {
       task.done = true;
     }
   }
}

completeTask(3);
showTasks(tasks);

// Filter Incomplete Tasks

 function getPendingTasks() {
   let pending = [];

   for (let task of tasks) {
     if (!task.done) {
       pending.push(task);
     }
   }

   return pending;
 }

 console.log("\nPENDING ONLY:");
 showTasks(getPendingTasks());

 console.log("Debugging Git is less scary now");