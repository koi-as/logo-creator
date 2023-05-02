const fs = require('fs');
const inquirer = require('inquirer');

const {Square, Triangle, Circle} = require('./lib/shapes.js')

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
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
            name: 'shapeColor',
            message: 'Please choose a color for your logo:'
        }
    ])
    .then((data) => {
        if(data.text.length > 3) {
            console.log('Please choose no more than 3 letters for your logo text!')
            return;
        } else {
            if(data.shape === 'Square') {
                const newSquare = new Square(data.text, data.textColor, data.shapeColor);
                const generateSquare = newSquare.generateSVG()
                console.log('Square generating...');
                writeToFile(generateSquare);
            } else if (data.shape === 'Triangle') {
                const newTriangle = new Triangle (data.text, data.textColor, data.shapeColor);
                const generateTriangle = newTriangle.generateSVG();
                console.log('Triangle Generating...');
                writeToFile(generateTriangle);
            } else if (data.shape === 'Circle') {
                const newCircle = new Circle(data.text, data.textColor, data.shapeColor);
                const generateCircle = newCircle.generateSVG();
                console.log('Circle generating...');
                writeToFile(generateCircle);
            };
        };
    });

const writeToFile = (generateSvg) => {
    const svgFile = generateSvg

    fs.writeFile('./examples/logo.html', `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${svgFile}
    </body>
    </html>`, (err) => {
        err ? console.log(error) : console.log('Written to file')
    })
}
