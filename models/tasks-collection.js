const Task = require('./task');

class TasksCollection {

  constructor() {
    this.tasks = {};
  }

  createTask(description = '') {
    const task = new Task(description);
    this.tasks[task.id] = task;
  }
}

module.exports = TasksCollection;
