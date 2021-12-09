require('colors');

const showMenu = () => {
  console.clear();

  console.log('========================'.green);
  console.log('Choose an option'.green);
  console.log('========================'.green);

  console.log(`${ '1.'.green } Create task`);
  console.log(`${ '2.'.green } List task`);
  console.log(`${ '3.'.green } List completed task`);
  console.log(`${ '4.'.green } List pending task`);
  console.log(`${ '5.'.green } Complete task(s)`);
  console.log(`${ '6.'.green } Delete task`);
  console.log(`${ '0.'.green } Exit`);

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Choose an option: ', (option) => {
    console.log({ option });
    readline.close();
  })
}

module.exports = {
  showMenu
}
