const mongoose = require('mongoose');
const User = require('../modules/user');
const Thought = require('../modules/thought');
const reactionSchema = require('../modules/reaction');


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async () => {
  console.log('Connected to the database');

  async function clearCollections() {
    try {
      await User.deleteMany({});
      await Thought.deleteMany({});
      console.log('Collections cleared successfully');
    } catch (error) {
      console.error('Error clearing collections:', error);
    }
  }
  
  // Call the function to clear collections before reseeding, prevents duplicate valueErrors when testing
  clearCollections();

  // Thoughts seed below

  const thoughtsData = [
    {
      thoughtText: "Feeling grateful for all the little things in life. 😊",
      username: "user1",
      reactions: [
        {
          reactionBody: "Absolutely! Gratitude is so important.",
          username: "user2"
        },
        {
          reactionBody: "Couldn't agree more. It's the small moments that matter.",
          username: "user3"
        }
      ]
    },
    {
      thoughtText: "Just finished reading a great book. Highly recommend!",
      username: "user4",
      reactions: [
        {
          reactionBody: "What book was it? I'm looking for something new to read.",
          username: "user5"
        }
      ]
    },
    {
      thoughtText: "Spent the day hiking in the mountains. Nature is breathtaking.",
      username: "user6",
      reactions: [
        {
          reactionBody: "I love hiking too! Any favorite trails?",
          username: "user7"
        },
        {
          reactionBody: "Your photos from the hike are stunning!",
          username: "user8"
        }
      ]
    }
    // ... more thoughts with reactions ...
  ];

  try {
    const insertedThoughts = await Thought.insertMany(thoughtsData);
    console.log('Thoughts inserted:', insertedThoughts);
  } catch (error) {
    console.error('Error inserting thoughts:', error);
  }

  // Below is the user data being inserted
  const usersData = [
    {
      username: "user1",
      email: "user1@example.com"
    },
    {
      username: "user2",
      email: "user2@example.com"
    },
    {
      username: "user3",
      email: "user3@example.com"
    }
    // ... more users ...
  ];

  try {
    const insertedUsers = await User.insertMany(usersData);
    console.log('Users inserted:', insertedUsers);
  } catch (error) {
    console.error('Error inserting users:', error);
  }
});









