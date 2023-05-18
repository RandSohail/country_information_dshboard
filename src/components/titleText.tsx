import React from 'react';
import { Typography, Box } from '@mui/material';
import { types } from '../helper';

export default function titleText({ title, text }: types.TitleTextProps) {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        variant="subtitle2"
        sx={{ color: '#362FD9' }}
        display={'inline'}
      >
        {title} :
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ fontWeight: 900 }}
        display={'inline'}
      >
        {'  '}
        {text}
      </Typography>
    </Box>
  );
}
