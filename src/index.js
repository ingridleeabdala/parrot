"use strict";

require("dotenv").config();

const { Command, flags } = require("@oclif/command");

const Controller = require("./controller");
const FileManager = require("./file-manager");

class ParrotCliCommand extends Command {
  async run() {
    const ctl = new Controller(this.log);

    this.log(FileManager.readBanner());

    try {
      await ctl.start();
    } catch (error) {
      this.log(error);
    }
  }
}

ParrotCliCommand.description = `A CLI application to make calls and prank people`;

ParrotCliCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: "v" }),
  // add --help flag to show CLI version
  help: flags.help({ char: "h" }),
};

module.exports = ParrotCliCommand;
