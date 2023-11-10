const express = require("express");
const fs = require("fs");
const path = require("path");
const jsonPosts = require("../posts.json");

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

      htmlContent.push("<ul>");

      for (const post of jsonPosts) {
        htmlContent.push(
          `<li>
            <h3>${post.title}</h3> 
            <br> <strong> Content: </strong> ${post.content}  
            <br> <strong> Tags: </strong> ${post.tags} 
            <br> <img src='/imgs/${post.src}' style="width: 250px; height: 150px"> 
          </li>`
        );
      }

      htmlContent.push("</ul>");
      const joinedHtml = htmlContent.join("");
      const finalContent = posts.replace("@content", joinedHtml);

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
