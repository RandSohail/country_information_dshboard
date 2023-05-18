import React from 'react';
import { Typography, Box } from '@mui/material';
type TitleTextProps = {
  title: string;
  text?: string;
};
export default function titleText({ title, text }: TitleTextProps) {
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
