const fs = require('fs');
const inquirer = require('inquirer');

function init () {
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
                type: 'choice',
                name: 'shape',
                message: 'Please choose one of the following shapes for your logo:',
                choice: ['Square', 'Triangle', 'Circle']
            },
            {
                type: 'input',
                name: 'color',
                message: 'Please choose a color for your logo:'
            }
        ])
        .then((data) => {
            //something goes here
        })
};

function writeToFile () {};

init()