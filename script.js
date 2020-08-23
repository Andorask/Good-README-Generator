const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer"); 
const path = require("path");

getInfo();

function getInfo(

)

const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "Username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "Email",
    },
    {
        type: "input",
        message: "What would you like your project title to be?",
        name: "Title",
    },
    {
        type: "input",
        message: "What would you like your project description to be?",
        name: "Description",
    },
    {
        type: "input",
        message: "What are the steps needed to install your project? Provide a step by step process if possible.",
        name: "Installation",
    },
    {
        type: "input",
        message: "What will your project be used for?",
        name: "Usage",
    },
    {
        type: "input",
        message: "Which license would you like to use?",
        name: "License",
    },
    {
        type: "input",
        message: "What is your license URL?",
        name: "LicenseURL",
    },
    {
        type: "input",
        message: "What command should be used to run tests?",
        name: "Test",
    },
    {
        type: "input",
        message: "If there are any contributors to your project, please enter their Github usernames. Seperate the names with spaces and commas.",
        name: "GitContributor",
    },
]
