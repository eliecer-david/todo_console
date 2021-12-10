require('colors');

const { showMenu } = require('./helpers/messages');

console.clear();

const main = async () => {
  let option = '';

  do {
    option = await showMenu();
  } while (option !== '0')
}

main();
