const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPost,
} = require("../controllers/posts.js");

const router = express.Router();

//CRUD Operations

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
