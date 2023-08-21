const express = require('express');
const router = express.Router();


router.get('/'), (req, res) => {
    // get all thoughts
    // to get a single thought by its _id
}

router.post('/'), (req, res) => {
    // to create a new thought 
    // (don't forget to push the created thought's `_id`
    //  to the associated user's `thoughts` array field)
    // EXAMPLE: 
    ```json
    {
        "thoughtText": "Here's a cool thought...",
        "username": "lernantino",
        "userId": "5edff358a0fcb779aa7b118b"
    }```
}

router.put('/'), (req, res) => {
    // to update a thought by its _id
}

router.delete('/'), (req, res) => {
    // ro remove a though by its _id
}

router.post('thoughtId/reactions'), (req, res) => {
    // to create a reaction stored in a single thoughts REACTIONS array field
}

router.delete('thoughtId/reactions'), (req, res) => {
    // to pull and remove a reacion by the reaction's REACTIONID value
}

module.exports = router;