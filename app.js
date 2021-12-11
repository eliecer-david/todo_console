require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { saveData, readData } = require('./helpers/storage-manager');
const TasksCollection = require('./models/tasks-collection');

const main = async () => {
  let option = '';

  const initialData = readData();
  const tasksCollection = new TasksCollection(initialData);

  do {
    option = await inquirerMenu();

    switch (option) {
      case 1:
        const description = await readInput('Description:');
        tasksCollection.createTask(description);
        break;

      case 2:
        console.log(tasksCollection.arrayTasks);
        break;
    }

    saveData(tasksCollection.tasks);

    if  (option != 0) await pause();
  } while (option != 0)
}

main();
