const express = require("express");
const fs = require("fs");
const path = require("path");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
function index(req, res) {
  res.format({
    html: () => {
      const homePage = fs.readFileSync(
        path.resolve(__dirname, "../layouts/homepage.html"),
        "utf-8"
      );

      res.type("html").send(homePage);
    },
  });
}

module.exports = { index };
