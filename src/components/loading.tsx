import React from 'react';
import { Skeleton, Box } from '@mui/material';
export default function loading() {
  const skeletonItems = new Array(12).fill(null);
  return (
    <>
      <Skeleton variant="rectangular" height={64} animation="wave" />
      <div className="main-container">
        <div className="search-container">
          <Skeleton
            variant="rectangular"
            height={45}
            width={250}
            animation="wave"
          />
          <Skeleton
            variant="rectangular"
            height={45}
            width={250}
            animation="wave"
          />
        </div>

        <br />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          {skeletonItems.map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              height={330}
              width={250}
              animation="wave"
            />
          ))}
        </Box>
      </div>
    </>
  );
}
