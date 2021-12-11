require('colors');

const {
  inquirerMenu,
  pause,
  readInput,
  showTasksToDelete,
  confirmQuestion,
  showTasksInChecklist
} = require('./helpers/inquirer');
const { saveData, readData } = require('./helpers/storage-manager');
const TasksCollection = require('./models/tasks-collection');

const main = async () => {
  let option = '';

  const tasksCollection = new TasksCollection();
  const initialData = readData();
  tasksCollection.loadTasksFromArray(initialData);

  do {
    option = await inquirerMenu();

    switch (option) {
      case 1:
        const description = await readInput('Description:');
        tasksCollection.createTask(description);
        break;

      case 2:
        console.log();
        tasksCollection.showAllTasksFormatted();
        break;

      case 3:
        console.log();
        tasksCollection.showCompletedTasksFormatted();
        break;

      case 4:
        console.log();
        tasksCollection.showPendingTasksFormatted();
        break;

      case 5:
        console.log();
        const ids = await showTasksInChecklist(tasksCollection.tasksArray);
        console.log(ids);
        break;

      case 6:
        const id = await showTasksToDelete(tasksCollection.tasksArray);
        const confirm = await confirmQuestion('Are you sure?');

        if (confirm) {
          tasksCollection.deleteTask(id);
          console.log('Task was deleted successfully.');
        }
        break;
    }

    saveData(tasksCollection.tasksArray);

    if  (option != 0) await pause();
  } while (option != 0)
}

main();
