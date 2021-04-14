// Thread
    // Text
    // Rating
    // Date posted
    // Topic? -- maybe add later
    // List of comments? -- probably not



const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const threadSchema = new mongoose.Schema({
    text: String,
    rating: Number,
    posted: {
        type: Date,
        default: Date.now
    },
    topic: String
});

const Thread = mongoose.model('Thread', threadSchema);

//post a thread
//get all threads
//get one thread

router.post("/", async(req, res) => {

});

router.get("/", async(req, res) => {

});

router.get("/:id", async(req, res) => {

});

module.exports = {
    model: Thread,
    routes: router,
}