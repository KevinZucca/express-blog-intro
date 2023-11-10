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

      const navbar = fs.readFileSync(
        path.resolve(__dirname, "../components/navbar.html"),
        "utf-8"
      );
      const finalHome = homePage.replace("@navbar", navbar);

      res.type("html").send(finalHome);
    },
  });
}

module.exports = { index };
