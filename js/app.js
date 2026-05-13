let tasks = [
  { id: 1, title: "Learn JavaScript", done: false },
  { id: 2, title: "Practice Git", done: true },
  { id: 3, title: "Build small project", done: false },
  { id: 4, title: "Push code to GitHub", done: false }
];


console.log("Before Update:");


 for (let task of tasks)  {
     console.log(task.title + "-" + task.done);
 }

tasks[0].done = true;

console.log("After update:");
 for (let task of tasks) {
   console.log(`${task.title} - ${task.done}`);
 }

// ------- debugging --------

let tasks2 = [
  { id: 1, title: "Learn JS", done: false },
  { id: 2, title: "Git practice", done: true },

  { id: 3, title: "Huh", done: false }
];

for (let task of tasks2) {
  if (task.done === true)  {
    console.log(task.title);
  }
}
// --- debug 2 ----
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i <= (numbers.length - 1); i++) {
  console.log(numbers[i]);
}
//--- debug 3 ----
let name = "Suzanne";

function greet() {
  let message = "Hello " + name;
  return message;
}

console.log(greet());

