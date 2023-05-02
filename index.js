const fs = require('fs');
const inquirer = require('inquirer');

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
        console.log(data)

        if(data.shape === 'Square') {
            const generateSvg = () => 
            `
<svg width="300" height="200">
    <rect width="200" height="200" style="fill:${data.shapeColor}"/>
    <text fill="${data.textColor}" font-size="70" font-family="Verdana" x="20" y="100">${data.text}</text>
</svg>
`
            console.log('Square generated')
            writeToFile(generateSvg)
        } else if (data.shape === 'Triangle') {
            const generateSvg = () => 
            `
<svg width="300" height="200">
    <polygon points="150, 18 244, 182 56, 182" style="fill:${data.shapeColor}"/>
    <text fill="${data.textColor}" font-size="70" font-family="Verdana" x="20" y="100">${data.text}</text>
</svg>
`
            console.log('Triangle Generated')
            writeToFile(generateSvg)
        } else if (data.shape === 'Circle') {
            const generateSvg = () => 
            `
<svg width="300" height="200">
    <circle cx="100" cy="100" r="100" style="fill:${data.shapeColor}"/>
    <text fill="${data.textColor}" font-size="70" font-family="Verdana" x="20" y="100">${data.text}</text>
</svg>
`
            console.log('Circle generated')
            writeToFile(generateSvg)
        }
    });

const writeToFile = (generateSvg) => {
    const svgFile = generateSvg()

    fs.writeFile('./examples/logo.svg', svgFile, (err) => {
        err ? console.log(error) : console.log('Written to file')
    })
    console.log(svgFile)
}

// module.exports = ;
