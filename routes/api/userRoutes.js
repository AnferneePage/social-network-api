const express = require('express');
const router = express.Router();
const User = require('../../modules/user')

router.get('/', async (req, res) => {
    // return all users
    try{
        const users = await User.find()
    } catch (err) {
        res.status(500).json({ error:err.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .populate('thoughts')
            .populate('friends');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email
        });

        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.post('/:userId/friends/:friendId', async (req, res) => {
    try {
        const { userId, friendId } = req.params;

        // Find the user and friend by their IDs
        const user = await User.findById(userId);
        const friend = await User.findById(friendId);

        if (!user || !friend) {
            return res.status(404).json({ error: 'User or friend not found' });
        }

        // Add the friend to the user's friend list
        user.friends.push(friend._id);
        await user.save();

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', async (req, res) => {
    try {
        const { userId, friendId } = req.params;

        // Find the user and friend by their IDs
        const user = await User.findById(userId);
        const friend = await User.findById(friendId);

        if (!user || !friend) {
            return res.status(404).json({ error: 'User or friend not found' });
        }

        // Remove the friend's _id from the user's friend list
        user.friends = user.friends.filter(id => id.toString() !== friendId);
        await user.save();

        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Other route definitions

module.exports = router;


module.exports = router;