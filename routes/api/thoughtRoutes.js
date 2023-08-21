const express = require('express');
const router = express.Router();
const Thought = require('../../modules/thought');

// GET all thoughts
router.get('/', async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET a single thought by its _id
router.get('/:thoughtId', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// POST a new thought
router.post('/', async (req, res) => {
    try {
        const { thoughtText, username, userId } = req.body;

        // Create a new thought
        const newThought = new Thought({
            thoughtText,
            username
        });

        // Save the new thought
        const savedThought = await newThought.save();

        // Push the created thought's _id to the associated user's thoughts array
        const user = await User.findById(userId);
        user.thoughts.push(savedThought._id);
        await user.save();

        res.json(savedThought);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// PUT to update a thought by its _id
router.put('/:thoughtId', async (req, res) => {
    try {
        const { thoughtId } = req.params;
        const { thoughtText } = req.body;

        // Find the thought by its _id
        const thought = await Thought.findByIdAndUpdate(
            thoughtId,
            { thoughtText },
            { new: true }
        );

        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }

        res.json(thought);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:thoughtId', async (req, res) => {
    try {
        const { thoughtId } = req.params;

        // Find and remove the thought by its _id
        const thought = await Thought.findByIdAndRemove(thoughtId);

        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }

        res.json({ message: 'Thought removed successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST to create a reaction stored in a single thought's REACTIONS array field
router.post('/:thoughtId/reactions', async (req, res) => {
    try {
        const { thoughtId } = req.params;
        const { reactionBody, username } = req.body;

        // Find the thought by its _id
        const thought = await Thought.findById(thoughtId);

        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }

        // Create a new reaction
        const newReaction = {
            reactionBody,
            username
        };

        // Push the new reaction to the thought's reactions array
        thought.reactions.push(newReaction);
        await thought.save();

        res.json(thought);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE to pull and remove a reaction by the reaction's REACTIONID value
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
        const { thoughtId, reactionId } = req.params;

        // Find the thought by its _id
        const thought = await Thought.findById(thoughtId);

        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }

        // Find the index of the reaction by its REACTIONID value
        const reactionIndex = thought.reactions.findIndex(
            reaction => reaction.reactionId.toString() === reactionId
        );

        if (reactionIndex === -1) {
            return res.status(404).json({ error: 'Reaction not found' });
        }

        // Remove the reaction from the reactions array
        thought.reactions.splice(reactionIndex, 1);
        await thought.save();

        res.json(thought);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;