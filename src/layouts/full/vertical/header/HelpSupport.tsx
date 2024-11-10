// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { IconButton, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { IconHelp } from '@tabler/icons-react';

const HelpSupport = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/dashboards/fill-form');
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="Help or Support"
        color="inherit"
        sx={{
          color: 'text.secondary',
        }}
        onClick={handleNavigate}
      >
        <IconHelp size="21" stroke="1.5" />
      </IconButton>
    </Box>
  );
};

export default HelpSupport;
