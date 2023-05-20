const express = require('express');
const tagsRouter = express.Router();


tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /post");

  next();
});

module.exports = tagsRouter;




const { getPostsByTagName } = require('../db');


tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    // read the tagname from the params
    const { tagName } = req.params;
    // console.log(tagName, "tag name")
    try {
        const posts = await getPostsByTagName(tagName);
        console.log(`Route reached`)
        res.send({
          posts
        });

      // use our method to get posts by tag name from the db
      // send out an object to the client { posts: // the posts }
    } catch ({ name, message }) {
      // forward the name and message to the error handler
      res.send({name,message })
    }
  });