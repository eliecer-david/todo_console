require('colors');

const inquirer = require('inquirer');

const inquirerMenu = async () => {
  console.clear();

  console.log('===================='.cyan);
  console.log('      TODO app'.cyan);
  console.log('===================='.cyan);

  const menuOptions = [
    {
      type: 'list',
      name: 'option',
      message: 'What do you want to do?',
      choices: [
        { value: 1, name: `${ '1.'.cyan } Create task` },
        { value: 2, name: `${ '2.'.cyan } List tasks` },
        { value: 3, name: `${ '3.'.cyan } List completed tasks` },
        { value: 4, name: `${ '4.'.cyan } List pending tasks` },
        { value: 5, name: `${ '5.'.cyan } Complete task(s)` },
        { value: 6, name: `${ '6.'.cyan } Delete task` },
        { value: 0, name: `${ '0.'.cyan } Exit` }
      ]
    }
  ];

  const { option } = await inquirer.prompt(menuOptions);
  return option;
}

const pause = async () => {
  const questions = [
    {
      type: 'input',
      name: 'continue',
      message: `Press ${'any key'.green} to continue ...`
    }
  ];

  console.log('\n');
  await inquirer.prompt(questions);
}

const readInput = async (message) => {
  const questions = [
    {
      type: 'input',
      name: 'input',
      message,
      validate (value) {
        if (value.length === 0) {
          return 'Please, enter a value';
        }

        return true;
      }
    }
  ];

  const { input } = await inquirer.prompt(questions);
  return input;
}

module.exports = {
  inquirerMenu, pause, readInput
}
