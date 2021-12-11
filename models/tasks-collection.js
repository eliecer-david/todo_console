require('colors');

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

  markTaskAsCompleted(id) {
    if (this.tasks[id].completedAt) {
      return ;
    }

    this.tasks[id].completedAt = new Date().toISOString();
  }

  markTaskAsIncompleted(id) {
    this.tasks[id].completedAt = null;
  }

  completeTasks(ids = []) {
    this.tasksArray.forEach(task => {
      const id = task.id;

      if (ids.find(value => value == id)) {
        this.markTaskAsCompleted(id);
      } else {
        this.markTaskAsIncompleted(id);
      }
    });
  }

  deleteTask(id) {
    delete this.tasks[id];
  }

  loadTasksFromArray(array = []) {
    array.forEach((value) => {
      this.tasks[value.id] = value;
    });
  }

  showAllTasksFormatted() {
    this.tasksArray.forEach((task, key) => {
      const index = key + 1;
      console.log(`${ (index + '.').cyan } ${ task.description } :: ${ task.completedAt ? 'completed'.cyan : 'pending'.red }`);
    });
  }

  showCompletedTasksFormatted() {
    this.tasksArray
      .filter(task => task.completedAt)
      .forEach((task, key) => {
        const index = key + 1;
        console.log(`${ (index + '.').cyan } ${ task.description } :: ${ task.completedAt.cyan }`);
      });
  }

  showPendingTasksFormatted() {
    this.tasksArray
      .filter(task => ! task.completedAt)
      .forEach((task, key) => {
        const index = key + 1;
        console.log(`${ (index + '.').cyan } ${ task.description }`);
      });
  }
}

module.exports = TasksCollection;
