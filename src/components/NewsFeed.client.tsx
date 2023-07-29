// components/NewsFeed.client.js
import React from 'react';
import Thread from './Thread.client';

const NewsFeed = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <Thread key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default NewsFeed;
