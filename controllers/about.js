const express = require("express");
const path = require("path");
const fs = require("fs");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
function index(req, res) {
  res.format({
    html: () => {
      const navbar = fs.readFileSync(
        path.resolve(__dirname, "../components/navbar.html"),
        "utf-8"
      );
      const about = fs.readFileSync(
        path.resolve(__dirname, "../layouts/about.html"),
        "utf-8"
      );
      const finalAbout = about.replace("@navbar", navbar);

      res.type("html").send(finalAbout);
    },
  });
}

module.exports = { index };
