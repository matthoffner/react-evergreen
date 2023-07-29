import React from 'react';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';

const NewsFeed = dynamic(() => import('../components/NewsFeed.client'), { ssr: false });

const HomePage = () => {
  const tweets = [
    { id: 1, author: 'User 1', content: 'Hello, world! This is my first tweet.', replies: 10, likes: 24 },
    { id: 2, author: 'User 2', content: 'Looking forward to the weekend!', replies: 5, likes: 12 },
    { id: 3, author: 'User 3', content: 'Just had the best cup of coffee ever. ☕️', replies: 7, likes: 18 },
    { id: 4, author: 'User 4', content: 'Beautiful sunset today. 🌇', replies: 8, likes: 26 },
    { id: 5, author: 'User 5', content: 'Does anyone have good book recommendations? 📚', replies: 20, likes: 45 },
    { id: 6, author: 'User 6', content: 'Excited about the game tonight! 🏀', replies: 15, likes: 30 },
    { id: 7, author: 'User 7', content: 'Throwback to last summer. 🌞', replies: 12, likes: 40 },
    { id: 8, author: 'User 8', content: 'Here\'s a quote for the day: "The only way to do great work is to love what you do." - Steve Jobs', replies: 9, likes: 35 },
    { id: 9, author: 'User 9', content: 'Just finished my workout for the day. 💪', replies: 4, likes: 15 },
    { id: 10, author: 'User 10', content: 'This is a tweet with a link. Check out https://openai.com', replies: 11, likes: 22 },
];


  return (
    <Box>
      <NewsFeed tweets={tweets} />
    </Box>
  );
};

export default HomePage;
