const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

// Comment
    // Text
    // Thread id
    // Date posted

const commentSchema = new mongoose.Schema({
    text: String,
    thread: {
        type: mongoose.Schema.ObjectId,
        ref: 'Thread'
    },
    posted: {
        type: Date,
        default: Date.now
    }
});

const Comment = mongoose.model('Comment', commentSchema);

//post a comment
//get all comments for thread

router.post("/", async(req, res) => {

});

router.get("/:id", async(req, res) => {

});

module.exports = {
    model: Comment,
    routes: router,
}