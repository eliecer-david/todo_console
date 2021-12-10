require('colors');

const { inquirerMenu } = require('./helpers/inquirer');
const { showConfirmation } = require('./helpers/messages');

console.clear();

const main = async () => {
  let selectedOption = '';
  do {
    selectedOption = (await inquirerMenu()).option;
    console.log(selectedOption);

    if  (selectedOption != 0) await showConfirmation();
  } while (selectedOption != 0)
}

main();
