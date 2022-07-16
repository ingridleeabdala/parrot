"use strict";

const inquirer = require("inquirer");

class Inquirer {
  constructor(logger) {
    this.log = logger;
  }

  async askPhoneNumber() {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "phone_number",
        message: "Phone number to call:",
      },
    ]);

    return answers.phone_number;
  }

  async askText() {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Say what you want the parrot to repeat:",
      },
    ]);

    return answers.text;
  }
}

module.exports = Inquirer;
