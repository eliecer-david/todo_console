const Task = require('./task');

class TasksCollection {

  constructor() {
    this.tasks = {};
  }

  get arrayTasks() {
    const array = [];

    Object.keys(this.tasks).forEach(key => {
      const task = this.tasks[key];
      array.push(task);
    });

    return array;
  }

  createTask(description = '') {
    const task = new Task(description);
    this.tasks[task.id] = task;
  }
}

module.exports = TasksCollection;
