import { Box, Typography } from '@mui/material';
import errorImage from '../assets/images/error.jpg';

export default function errorFetching() {
  return (
    <Box sx={{ textAlign: 'center', margin: '100px ' }}>
      <Typography variant="h5" sx={{ mb: '10px' }}>
        Failed to fetch! Try again later{' '}
      </Typography>
      <img
        src={errorImage}
        alt="Error Fetching Image"
        style={{ width: '400px' }}
      />
    </Box>
  );
}
