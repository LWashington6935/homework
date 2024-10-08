// TODO: Include packages needed for this application
import inquirer from "inquirer"; 
import * as fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "imput",
        message: "what is the title",
        name: "title",
    },
    {
    type: "imput",
    message: "what is the description",
    name: "description"
    },
    {
        type: "imput",
        message: "What are the instalation instruction",
        name: "installation",
    },
    {
        type: "imput",
        message: "what is the usage information",
        name: "usage"
    },
    {
        type: "imput",
        message: "what are the contribution guide lines",
        name: "contribution",
    },
    {
        type: "list",
        message: "Which license would you like to use for the application",
        name: "license",
        choices: ["MIT", "GPLv3"],
    },
    {
        type: "imput",
        message: "What is your is git hub username",
        name: "username",

    },
    {
        type: "imput",
        message: "What is your email address",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
    const __dirname = dirname(fileURLToPath(import.meta.url));
    fs.writeFileSync(__dirname+fileName, data.toString());}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>

    writeToFile('/readme.md',generateMarkdown(answers)))
}

// Function call to initialize app
init();