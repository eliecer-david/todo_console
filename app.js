require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirer');
const TasksCollection = require('./models/tasks-collection');

const main = async () => {
  let option = '';

  const tasksCollection = new TasksCollection();

  do {
    option = await inquirerMenu();

    switch (option) {
      case 1:
        break;

      case 2:
        console.log(tasksCollection.tasks);
        break;
    }

    if  (option != 0) await pause();
  } while (option != 0)
}

main();
