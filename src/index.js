"use strict";

const { Command, flags } = require("@oclif/command");

const Engine = require("./engine");
const FileManager = require("./file-manager");

class HangmanCliCommand extends Command {
  async run() {
    const engine = new Engine(this.log);

    this.log(FileManager.readBanner());

    try {
      await engine.startGame();
    } catch (error) {
      this.log(error);
    }
  }
}

HangmanCliCommand.description = `A CLI game built with Node`;

HangmanCliCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: "v" }),
  // add --help flag to show CLI version
  help: flags.help({ char: "h" }),
};

module.exports = HangmanCliCommand;
