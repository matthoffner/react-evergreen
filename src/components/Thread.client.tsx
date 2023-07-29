// components/Tweet.client.js
import { Card, CardContent, Typography, IconButton, Box, Avatar, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import EmailIcon from '@mui/icons-material/Email';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Tweet = ({ tweet }) => {
  return (
    <Card sx={{ marginBottom: 2, boxShadow: 0, bgcolor: 'black' }}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container>
          <Grid item xs={1} sx={{ paddingLeft: '5px' }}>
            <Avatar alt={tweet.author} src="/static/images/avatar/1.jpg" /> 
          </Grid>
          <Grid item xs={11} sx={{}}>
            <Box sx={{ paddingLeft: '5px', display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">{tweet.author}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ marginRight: 1 }}>9h</Typography> 
                <IconButton aria-label="menu" size="small">
                  <MoreHorizIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ paddingLeft: '5px', minHeight: '50px' }}>
              {tweet.content}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'start', paddingBottom: 0 }}>
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
            <Typography sx={{ paddingLeft: '5px' }} variant="body2">{tweet.replies} Replies • {tweet.likes} Likes</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Tweet;
