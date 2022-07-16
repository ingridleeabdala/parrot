"use strict";

const Inquirer = require("./inquirer");
const Caller = require("./caller");

class Controller {
  constructor(logger) {
    this.log = logger;
  }

  async start() {
    const inquirer = new Inquirer(this.log);

    const phoneNumber = await inquirer.askPhoneNumber();

    this.log(phoneNumber);

    const text = await inquirer.askText();

    this.log(text);

    const confirmation = await inquirer.askConfirmation();

    if (confirmation) {
      const caller = new Caller(this.log);

      await caller.call(phoneNumber, text);
    }
  }
}

module.exports = Controller;
