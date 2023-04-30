const fs = require('fs');
const inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoText',
            message: 'Please choose up to 3 letters for your logo:'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please choose a color for your logo:'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose one of the following shapes for your logo:',
            choices: ['Square', 'Triangle', 'Circle']
        },
        {
            type: 'input',
            name: 'color',
            message: 'Please choose a color for your logo:'
        }
    ])
    .then((data) => {
        const filename = `./examples/logo.svg`

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => {
            err ? console.log(err) : console.log('success')
        });
    });
