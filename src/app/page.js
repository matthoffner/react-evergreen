import React from 'react';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';

const NewsFeed = dynamic(() => import('../components/NewsFeed.client'), { ssr: false });

const HomePage = () => {
  const tweets = [
    {
      "id": 1,
      "author": "react-evergreen",
      "content": "Threads clone using the latest React. Link: https://github.com/matthoffner/react-evergreen",
      "replies": 10,
      "likes": 24
    },
    {
      "id": 2,
      "author": "serp-chat",
      "content": "A Google clone with OpenAI functions. Link: https://huggingface.co/spaces/matthoffner/serp-chat",
      "replies": 5,
      "likes": 12
    },
    {
      "id": 3,
      "author": "falcon-mini",
      "content": "A lightweight version of the Falcon chat app. Link: https://huggingface.co/spaces/matthoffner/falcon-mini",
      "replies": 7,
      "likes": 18
    },
    {
      "id": 4,
      "author": "starchat-ui",
      "content": "User interface for the Starchat app. Link: https://huggingface.co/spaces/matthoffner/starchat-ui",
      "replies": 8,
      "likes": 26
    },
    {
      "id": 5,
      "author": "wizardcoder-sandbox",
      "content": "An interactive coding sandbox for practicing algorithms and data structures. Link: https://github.com/matthoffner/wizardcoder-sandbox",
      "replies": 20,
      "likes": 45
    },
    {
      "id": 6,
      "author": "etcha",
      "content": "CDN React Live Editor. Link: https://github.com/matthoffner/etcha",
      "replies": 15,
      "likes": 30
    },
    {
      "id": 7,
      "author": "ggml-fastapi",
      "content": "FastAPI backend for the GGML static site generator. Link: https://github.com/matthoffner/ggml-fastapi",
      "replies": 12,
      "likes": 40
    },
    {
      "id": 8,
      "author": "backseat-pilot",
      "content": "Bring your own co-pilot server and customize commands to refactor instead of autofill or tabbed completion. Link: https://github.com/matthoffner/backseat-pilot",
      "replies": 9,
      "likes": 35
    },
    {
      "id": 9,
      "author": "skymatt",
      "content": "Uses the hour of the day to set a background gradient. Link: https://github.com/matthoffner/skymatt",
      "replies": 4,
      "likes": 15
    }
];
  


  return (
    <Box>
      <NewsFeed tweets={tweets} />
    </Box>
  );
};

export default HomePage;
