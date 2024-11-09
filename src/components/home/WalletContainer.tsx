// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useState } from 'react';
import { Grid, Typography, Button, Box, Stack } from '@mui/material';
import { IconEye, IconEyeOff, IconPlus } from '@tabler/icons-react';
import DashboardCard from '../shared/DashboardCard';

const WalletContainer = () => {
  const [walletVisible, setWalletVisible] = useState(false);

  // Function to toggle the visibility and icon
  const togglePasswordVisibility = () => {
    setWalletVisible(!walletVisible);
  };
  return (
    <DashboardCard
      title="Wallet Balance"
      action={
        <Box>
          {walletVisible ? (
            <IconEyeOff onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
          ) : (
            <IconEye onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
          )}
        </Box>
      }
    >
      <Box>
        <Stack direction={'column'}>
          <Typography variant="h3" fontWeight="700">
            {walletVisible ? '******' : '₦63,489.50'}
          </Typography>
        </Stack>

        <Grid marginTop={5} xs={12} lg={4}>
          <Button fullWidth color="primary" variant="contained" startIcon={<IconPlus />}>
            Fund Wallet
          </Button>
        </Grid>
      </Box>
    </DashboardCard>
  );
};

export default WalletContainer;
