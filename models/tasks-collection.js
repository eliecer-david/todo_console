const Task = require('./task');

class TasksCollection {

  constructor(data = {}) {
    this.tasks = data;
  }

  get tasksArray() {
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

  loadTasksFromArray(array = []) {
    array.forEach((value) => {
      this.tasks[value.id] = value;
    });
  }
}

module.exports = TasksCollection;
