require('colors');

const { showMenu, showConfirmation } = require('./helpers/messages');

console.clear();

const main = async () => {
  let option = '';

  do {
    option = await showMenu();

    if  (option !== '0') await showConfirmation();
  } while (option !== '0')
}

main();
