const newTask = (title, description) => {
  const task = {
    title,
    description,
    complete: false,
    logState() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been compeleted`);
    },
    markCompleted() {
      this.complete = true;
    }
  };
  return task;
};
// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 🟤 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const task3 = newTask("Make Dinner", "Make Chicken Parm with 🍝");
const tasks = [task1,task2,task3];

task1.logState();
task3.logState();
task1.markCompleted();
task2.markCompleted();
task3.markCompleted();
task1.logState();
task2.logState();

