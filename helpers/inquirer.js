require('colors');

const inquirer = require('inquirer');

const inquirerMenu = async () => {
    console.clear();

    console.log('========================'.green);
    console.log('Choose an option'.green);
    console.log('========================'.green);

    const menuOptions = [
        {
            type: 'list',
            name: 'option',
            message: 'What do you want to do?',
            choices: [
                { value: 1, name: '1. Create task' },
                { value: 2, name: '2. List tasks' },
                { value: 3, name: '3. List completed tasks' },
                { value: 4, name: '4. List pending tasks' },
                { value: 5, name: '5. Complete task(s)' },
                { value: 6, name: '6. Delete task' },
                { value: 0, name: '0. Exit' }
            ]
        }
    ];

    const { option } = await inquirer.prompt(menuOptions);
    return option;
}

module.exports = {
    inquirerMenu
}
