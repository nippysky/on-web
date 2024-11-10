import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Button,
  Box,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { IconEye, IconEyeOff, IconPlus } from '@tabler/icons-react';
import DashboardCard from '../shared/DashboardCard';

const WalletContainer = () => {
  const [walletVisible, setWalletVisible] = useState(false);
  const [fundDialogOpen, setFundDialogOpen] = useState(false);
  const [amount, setAmount] = useState('');

  // Function to toggle wallet visibility
  const toggleWalletVisibility = () => {
    setWalletVisible(!walletVisible);
  };

  // Function to open and close the fund wallet dialog
  const handleFundDialogOpen = () => setFundDialogOpen(true);
  const handleFundDialogClose = () => setFundDialogOpen(false);

  // Function to handle the amount input change
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  return (
    <Box>
      <DashboardCard
        title="Wallet Balance"
        action={
          <Box>
            {walletVisible ? (
              <IconEyeOff onClick={toggleWalletVisibility} style={{ cursor: 'pointer' }} />
            ) : (
              <IconEye onClick={toggleWalletVisibility} style={{ cursor: 'pointer' }} />
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
            <Button
              fullWidth
              color="primary"
              variant="contained"
              startIcon={<IconPlus />}
              onClick={handleFundDialogOpen}
            >
              Fund Wallet
            </Button>
          </Grid>
        </Box>
      </DashboardCard>

      {/* Fund Wallet Dialog */}
      <Dialog open={fundDialogOpen} onClose={handleFundDialogClose} fullWidth maxWidth="sm">
        <DialogTitle>Fund Wallet</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Amount"
            type="number"
            fullWidth
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount to fund"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFundDialogClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              // Add fund wallet logic here
              handleFundDialogClose();
            }}
            color="primary"
            variant="contained"
          >
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default WalletContainer;
