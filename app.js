require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
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
        console.log(tasksCollection.tasksArray);
        break;
    }

    saveData(tasksCollection.tasksArray);

    if  (option != 0) await pause();
  } while (option != 0)
}

main();
