import { Card, CardContent, Typography, IconButton, Box, Avatar, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import EmailIcon from '@mui/icons-material/Email';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Tweet = ({ tweet }) => {
  const formatContentWithLinks = (content) => {
    const linkRegex = /(https?:\/\/\S+)/;
    const match = content.match(linkRegex);

    if (match) {
      const url = match[1];
      const parts = content.split(linkRegex);
      return (
        <span>
          {parts[0]}<a href={url} target="_blank" rel="noopener noreferrer">{url}</a>{parts[2]}
        </span>
      );
    }

    return content;
  };
  return (
    <Card sx={{ marginBottom: 2, boxShadow: 0, bgcolor: 'black' }}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container alignItems="flex-start">
          <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ padding: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px', height: '60px' }}>
              <Avatar alt={tweet.author} src="/static/images/avatar/1.jpg" sx={{ width: '100%', height: '100%' }} />
            </Box>
          </Grid>
          <Grid item xs={10} sx={{ paddingLeft: '10px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">{tweet.author}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ marginRight: 1 }}>9h</Typography>
                <IconButton aria-label="menu" size="small">
                  <MoreHorizIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ minHeight: '50px' }}>
              {formatContentWithLinks(tweet.content)}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 1 }}>
              <Box sx={{ marginLeft: '-10px', display: 'flex', justifyContent: 'start', paddingBottom: 0 }}>
                <IconButton aria-label="like">
                  <FavoriteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="reply">
                  <ChatBubbleOutlineIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="retweet">
                  <RepeatIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="message">
                  <EmailIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Typography variant="body2">
              {tweet.replies} Replies • {tweet.likes} Likes
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Tweet;
