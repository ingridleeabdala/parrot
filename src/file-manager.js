"use strict";

const fs = require("fs");
const { join } = require("path");

class FileManager {
  static readBanner() {
    return fs
      .readFileSync(join(process.cwd(), "assets", "banner.txt"))
      .toString();
  }
}

module.exports = FileManager;
