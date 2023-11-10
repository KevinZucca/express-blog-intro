const express = require("express");
const fs = require("fs");
const path = require("path");
const jsonPosts = require("../posts.json");
const loadNav = require("../utilities/loadNav");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
function index(req, res) {
  res.format({
    html: () => {
      const posts = fs.readFileSync(
        path.resolve(__dirname, "../layouts/posts.html"),
        "utf-8"
      );

      //   editing html file with main content
      const htmlContent = [];

      htmlContent.push('<div id="container">');

      for (const post of jsonPosts) {
        htmlContent.push(
          `<div class="card" style="width: 18rem;">
            <img id="card-img" src='/imgs/${post.src}'>
                <div class="card-body">
                    <h2>${post.title} </h2>
                    <p class="card-text">${post.content} </p>
                    <strong>${post.tags} </strong>
                </div>
            </div>`
        );
      }

      htmlContent.push("</div>");
      const joinedHtml = htmlContent.join("");
      const navbar = loadNav();

      const finalContent = posts
        .replace("@content", joinedHtml)
        .replace("@navbar", navbar);

      res.type("html").send(finalContent);
    },
    json: () => {
      res.type("json").send(jsonPosts);
    },
    default: () => {
      res.status(406).send("Type not valid");
    },
  });
}

module.exports = { index };
