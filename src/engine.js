"use strict";

class Engine {
  constructor(logger) {
    this.log = logger;
  }

  async startGame(showBanner) {
    this.log("testing...");
  }
}

module.exports = Engine;
