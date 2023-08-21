const express = require('express');
const router = express.Router();

router.get('/'), (req, res) => {
    // return all users
    // get a single user by its _id
}

router.post('/'), (req,res) => {
    // post a new user into the db

    // EXAMPLE:
    ```json {
        "username": "lernantino",
        "email": "lernantino@gmail.com"
    }```
}


router.post(':userId/friends/:friendId'), (req, res) => {
    // add a new friend to a users friend list
}

router.delete(':userId/friends/:friendId'), (req, res) => {
    // remove a friend from a users friend list
}

module.exports = router;