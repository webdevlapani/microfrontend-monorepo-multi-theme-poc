import { Spinner } from '@azaVista/posts-ui';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      Form Feeds APP
      <Box p={2}>
        <Link to="/">Click to go back home.</Link>
        <Box>
          <Spinner />
        </Box>
      </Box>
    </>
  );
}

export default Home;
