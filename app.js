require('colors');

const { inquirerMenu } = require('./helpers/inquirer');
const { showConfirmation } = require('./helpers/messages');

console.clear();

const main = async () => {
  let option = '';
  do {
    option = await inquirerMenu();

    if  (option != 0) await showConfirmation();
  } while (option != 0)
}

main();
